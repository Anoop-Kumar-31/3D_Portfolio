'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { TECH_DATA, SPATIAL_LABELS } from '@/data';

const getCameraTargetForSection = (
  section: string,
  selectedCategory: string | null | undefined,
  isMobile: boolean,
  isTablet: boolean,
  cubePos: THREE.Vector3,
  pyrPos: THREE.Vector3
) => {
  const target = selectedCategory || section;
  
  switch (target) {
    case 'Home':
      return { x: 0, y: 0, z: 15 };
    case 'Skills':
      return { x: 0, y: 0, z: 12 };
    case 'Frontend':
      return { x: 0, y: 0.3, z: isMobile ? 6.5 : 8.5 };
    case 'Backend':
      return { x: cubePos.x * 0.7, y: cubePos.y * 0.8, z: isMobile ? 7.0 : 9.0 };
    case 'Database':
      return { x: pyrPos.x * 0.7, y: pyrPos.y * 0.8, z: isMobile ? 7.0 : 9.0 };
    default:
      return { x: 0, y: 0, z: 15 };
  }
};

// --- Scene Setup Helpers ---
const createLights = () => {
  const ambient = new THREE.AmbientLight(0x0a101f, 2.0);
  const central = new THREE.PointLight(0x00f2fe, 15, 25, 1.8);
  const fill = new THREE.PointLight(0x7f00ff, 8, 20, 2);
  const dir = new THREE.DirectionalLight(0xffffff, 1.2);
  
  central.position.set(0, 0, 0);
  fill.position.set(5, -2, -2);
  dir.position.set(5, 8, 5);
  
  return { ambient, central, fill, dir };
};

const createFrontendSphere = () => {
  const group = new THREE.Group();
  const innerSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 64, 64),
    new THREE.MeshPhysicalMaterial({ color: 0x050f24, emissive: 0x004488, emissiveIntensity: 0.8, roughness: 0.1, metalness: 0.9, transmission: 0.6, thickness: 1.2, clearcoat: 1.0, clearcoatRoughness: 0.1 })
  );
  const outerCage = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.85, 2),
    new THREE.MeshStandardMaterial({ color: 0x00f2fe, wireframe: true, transparent: true, opacity: 0.3, emissive: 0x00f2fe, emissiveIntensity: 0.4 })
  );
  group.add(innerSphere, outerCage);
  return { group, innerSphere, outerCage };
};

const createBackendCube = () => {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(1.1, 1.1, 1.1);
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshPhysicalMaterial({ color: 0x4facfe, emissive: 0x0a224c, roughness: 0.2, metalness: 0.7, transmission: 0.7, thickness: 0.6, transparent: true, opacity: 0.85 })
  );
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0x4facfe, linewidth: 1.5 })
  );
  group.add(mesh, wireframe);
  return { group, mesh, wireframe };
};

const createDatabasePyramid = () => {
  const group = new THREE.Group();
  const geo = new THREE.ConeGeometry(0.7, 1.3, 4);
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshPhysicalMaterial({ color: 0x7f00ff, emissive: 0x22054c, roughness: 0.2, metalness: 0.7, transmission: 0.7, thickness: 0.6, transparent: true, opacity: 0.85 })
  );
  mesh.rotation.y = Math.PI / 4;
  
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0x7f00ff, linewidth: 1.5 })
  );
  wireframe.rotation.y = Math.PI / 4;
  
  group.add(mesh, wireframe);
  return { group, mesh, wireframe };
};

const createParticles = () => {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(200 * 3);
  for (let i = 0; i < positions.length; i++) positions[i] = (Math.random() - 0.5) * (i % 3 === 0 ? 30 : 20);
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0x4facfe, size: 0.08, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending })
  );
};

// Generate static properties for tech cards to form a spring (helix)
const CARDS_LOCAL_DATA = TECH_DATA.map((tech) => {
  const groupArr = TECH_DATA.filter(t => t.group === tech.group);
  const indexInGroup = groupArr.findIndex(t => t.id === tech.id);
  const totalInGroup = groupArr.length;
  
  // 2 full coils for a distinct spring look
  const numCoils = 2.0; 
  const initialAngle = (indexInGroup / totalInGroup) * Math.PI * 2 * numCoils;
  
  // Distribute Y from bottom (-1) to top (1)
  const normalizedY = totalInGroup > 1 ? (indexInGroup / (totalInGroup - 1)) * 2 - 1 : 0;
  
  return {
    id: tech.id,
    category: tech.category,
    group: tech.group,
    angle: initialAngle,
    springY: normalizedY * 1.2 // Spans from -1.2 to 1.2
  };
});

interface ThreeCanvasProps {
  activeSection: string;
  selectedCategory?: string | null;
  onSkillSelect?: (category: string) => void;
}

export default function ThreeCanvas({ activeSection, selectedCategory, onSkillSelect }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cubeGroupRef = useRef<THREE.Group | null>(null);
  const pyrGroupRef = useRef<THREE.Group | null>(null);

  // React-driven category highlight hook (for active CSS class shadows)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Mutable Ref to pass state instantly into the animation loop without triggers
  const hoveredCategoryRef = useRef<string | null>(null);
  hoveredCategoryRef.current = hoveredCategory;

  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const selectedCategoryRef = useRef(selectedCategory);
  selectedCategoryRef.current = selectedCategory;

  // Camera zoom transitions on activeSection change
  useEffect(() => {
    if (!cameraRef.current || !cubeGroupRef.current || !pyrGroupRef.current) return;

    const camera = cameraRef.current;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const targetPos = getCameraTargetForSection(
      activeSection,
      selectedCategory,
      isMobile,
      isTablet,
      cubeGroupRef.current.position,
      pyrGroupRef.current.position
    );

    gsap.killTweensOf(camera.position);

    gsap.to(camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 1.6,
      ease: 'power3.inOut',
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      }
    });
  }, [activeSection, selectedCategory]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // A. SETUP SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master orientation group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // B. SETUP LIGHTS
    const lights = createLights();
    scene.add(lights.ambient, lights.dir);
    masterGroup.add(lights.central, lights.fill);

    // C. BUILD 3D GEOMETRIES
    const { group: centralGroup, innerSphere, outerCage } = createFrontendSphere();
    masterGroup.add(centralGroup);

    const { group: cubeGroup, mesh: cubeMesh, wireframe: cubeWireframe } = createBackendCube();
    masterGroup.add(cubeGroup);

    const { group: pyrGroup, mesh: pyrMesh, wireframe: pyrWireframe } = createDatabasePyramid();
    masterGroup.add(pyrGroup);

    const particles = createParticles();
    masterGroup.add(particles);

    // D. INTERACTION CONFIGURATION
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    let orbitRadiusX = 5.5;
    let orbitRadiusZ = 5.5;

    // We clone CARDS_LOCAL_DATA so mutations (like card.angle) only affect this instance
    const cardsLocalData = CARDS_LOCAL_DATA.map(c => ({ ...c }));

    // E. RESPONSIVE SCALING HANDLER
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;

      if (isMobile) {
        orbitRadiusX = 2.8;
        orbitRadiusZ = 2.8;
        cubeGroup.position.set(-2.0, 2.8, -1.5);
        pyrGroup.position.set(2.0, -2.8, 1.0);
      } else if (isTablet) {
        orbitRadiusX = 4.2;
        orbitRadiusZ = 4.2;
        cubeGroup.position.set(-3.5, 2.2, -1.8);
        pyrGroup.position.set(3.5, -2.0, 1.2);
      } else {
        orbitRadiusX = 5.6;
        orbitRadiusZ = 5.6;
        cubeGroup.position.set(-4.8, 2.0, -1.5);
        pyrGroup.position.set(4.8, -1.8, 1.0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Unified Pointer Events (handles Mouse and Touch)
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      // Pointer capture ensures dragging works even if cursor leaves the canvas slightly
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) {
        // Parallax effect on hover
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;
        targetRotationY = currentRotationY + mouseX * 0.25;
        targetRotationX = currentRotationX + mouseY * 0.25;
        return;
      }

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      canvas.releasePointerCapture(e.pointerId);
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // F. MATHEMATICAL MAPPING LOOP
    const tempV = new THREE.Vector3();
    let animationFrameId: number;

    // Lerp values for mesh scales & speeds
    let meshSphereScale = 1.0;
    let meshCubeScale = 1.0;
    let meshPyrScale = 1.0;
    let sphereRotSpeed = 0.002;
    let cubeRotSpeed = 0.004;
    let pyrRotSpeed = 0.005;

    const tick = () => {
      animationFrameId = requestAnimationFrame(tick);

      // 1. Slow rotation
      if (!isDragging) {
        targetRotationY += 0.0006;
      }

      // Camera rotation interpolation
      currentRotationX = THREE.MathUtils.lerp(currentRotationX, targetRotationX, 0.06);
      currentRotationY = THREE.MathUtils.lerp(currentRotationY, targetRotationY, 0.06);

      masterGroup.rotation.x = currentRotationX;
      masterGroup.rotation.y = currentRotationY;

      // 2. Adjust target dynamics based on active categories
      let targetSphereScale = 1.0;
      let targetCubeScale = 1.0;
      let targetPyrScale = 1.0;
      let targetSphereRotSpeed = 0.002;
      let targetCubeRotSpeed = 0.004;
      let targetPyrRotSpeed = 0.005;

      const activeCat = hoveredCategoryRef.current;
      if (activeCat === 'frontend') {
        targetSphereScale = 1.25;
        targetSphereRotSpeed = 0.012;
      } else if (activeCat === 'backend') {
        targetCubeScale = 1.35;
        targetCubeRotSpeed = 0.015;
      } else if (activeCat === 'database') {
        targetPyrScale = 1.35;
        targetPyrRotSpeed = 0.015;
      }

      // Lerp geometries scale & rotation speed
      meshSphereScale = THREE.MathUtils.lerp(meshSphereScale, targetSphereScale, 0.08);
      meshCubeScale = THREE.MathUtils.lerp(meshCubeScale, targetCubeScale, 0.08);
      meshPyrScale = THREE.MathUtils.lerp(meshPyrScale, targetPyrScale, 0.08);

      sphereRotSpeed = THREE.MathUtils.lerp(sphereRotSpeed, targetSphereRotSpeed, 0.08);
      cubeRotSpeed = THREE.MathUtils.lerp(cubeRotSpeed, targetCubeRotSpeed, 0.08);
      pyrRotSpeed = THREE.MathUtils.lerp(pyrRotSpeed, targetPyrRotSpeed, 0.08);

      // Set scale
      outerCage.scale.set(meshSphereScale, meshSphereScale, meshSphereScale);
      cubeMesh.scale.set(meshCubeScale, meshCubeScale, meshCubeScale);
      cubeWireframe.scale.set(meshCubeScale, meshCubeScale, meshCubeScale);
      pyrMesh.scale.set(meshPyrScale, meshPyrScale, meshPyrScale);
      pyrWireframe.scale.set(meshPyrScale, meshPyrScale, meshPyrScale);

      // Rotate objects
      innerSphere.rotation.y += sphereRotSpeed * 0.4;
      outerCage.rotation.y -= sphereRotSpeed;
      outerCage.rotation.x += sphereRotSpeed * 0.3;

      cubeGroup.rotation.x += cubeRotSpeed;
      cubeGroup.rotation.y += cubeRotSpeed * 0.7;

      pyrGroup.rotation.y += pyrRotSpeed;
      pyrGroup.rotation.x += pyrRotSpeed * 0.3;

      // Vertical floating wobble
      const pulse = Date.now() * 0.001;
      const isMobile = width < 768;
      cubeGroup.position.y = (isMobile ? 2.8 : 2.0) + Math.sin(pulse) * 0.15;
      pyrGroup.position.y = (isMobile ? -2.8 : -1.8) + Math.sin(pulse + 1) * 0.15;

      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;

      // 3. Project world coordinates to DOM overlay
      updateDOMOverlay(sphereCamDepth => {
        // Sync static category labels
        // A. Core Sphere Label
        tempV.set(0, 0, 0).applyMatrix4(masterGroup.matrixWorld);
        syncDOMElement("sphere-label", tempV, 80);

        // B. Cube Label (float above)
        tempV.copy(cubeGroup.position);
        tempV.y += 1.4;
        tempV.applyMatrix4(masterGroup.matrixWorld);
        syncDOMElement("cube-label", tempV, 75);

        // C. Pyramid Label (float below)
        tempV.copy(pyrGroup.position);
        tempV.y -= 1.4;
        tempV.applyMatrix4(masterGroup.matrixWorld);
        syncDOMElement("pyramid-label", tempV, 75);
      });

      renderer.render(scene, camera);
    };

    // Projection utilities helper
    const updateDOMOverlay = (syncLabelsCallback: (sphereDepth: number) => void) => {
      // Find sphere's camera depth for comparison
      tempV.set(0, 0, 0).applyMatrix4(masterGroup.matrixWorld);
      const sphereCamPos = tempV.clone().applyMatrix4(camera.matrixWorldInverse);
      const sphereDepth = sphereCamPos.z;

      syncLabelsCallback(sphereDepth);

      // Project floating tech cards
      cardsLocalData.forEach(card => {
        const cardEl = document.getElementById(`card-${card.id}`);
        if (!cardEl) return;

        // Card orbit angle increments (slows down when parent category is active)
        const activeSelected = selectedCategoryRef.current ? selectedCategoryRef.current.toLowerCase() : null;
        const isHoveredOrSelected = hoveredCategoryRef.current === card.group || activeSelected === card.group;
        const speed = isHoveredOrSelected ? 0.0006 : 0.002;
        card.angle += speed;

        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;
        let radiusX = orbitRadiusX;
        let radiusZ = orbitRadiusZ;

        if (card.group === 'backend') {
          targetX = cubeGroup.position.x;
          targetY = cubeGroup.position.y;
          targetZ = cubeGroup.position.z;
          radiusX *= 0.6;
          radiusZ *= 0.6;
        } else if (card.group === 'database') {
          targetX = pyrGroup.position.x;
          targetY = pyrGroup.position.y;
          targetZ = pyrGroup.position.z;
          radiusX *= 0.6;
          radiusZ *= 0.6;
        }

        const localPos = new THREE.Vector3(
          targetX + Math.cos(card.angle) * radiusX,
          targetY + card.springY,
          targetZ + Math.sin(card.angle) * radiusZ
        );

        const worldPos = localPos.clone().applyMatrix4(masterGroup.matrixWorld);
        const camPos = worldPos.clone().applyMatrix4(camera.matrixWorldInverse);
        const cardDepth = camPos.z;

        const screenV = worldPos.clone();
        screenV.project(camera);

        // Boundary clip
        if (Math.abs(screenV.x) > 1.2 || Math.abs(screenV.y) > 1.2 || screenV.z > 1) {
          cardEl.style.opacity = '0';
          cardEl.style.pointerEvents = 'none';
          return;
        }

        const x = (screenV.x * 0.5 + 0.5) * width;
        const y = (screenV.y * -0.5 + 0.5) * height;

        // Depth calculations
        const minDepth = -21;
        const maxDepth = -9;
        const fraction = (cardDepth - minDepth) / (maxDepth - minDepth);
        const clampedFraction = Math.max(0, Math.min(1, fraction));

        let scale = 0.75 + clampedFraction * 0.35;
        let opacity = 0.25 + clampedFraction * 0.75;

        // Check active section constraints
        const activeSec = activeSectionRef.current;
        let belongsToActiveSection = activeSec === 'Home';

        // Fading of non-hovered categories or non-active sections
        if (!belongsToActiveSection) {
          opacity *= 0.05;
          scale *= 0.85;
        } else {
          // If a category is hovered or selected, dim the others
          const activeSelected = selectedCategoryRef.current ? selectedCategoryRef.current.toLowerCase() : null;
          const activeFocus = hoveredCategoryRef.current || activeSelected;
          if (activeFocus && card.group !== activeFocus) {
            opacity *= 0.15;
            scale *= 0.85;
          }
        }

        cardEl.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        cardEl.style.opacity = `${opacity}`;
        cardEl.style.pointerEvents = opacity < 0.15 ? 'none' : 'auto';

        // z-index sorting occlusion system
        if (cardDepth > sphereDepth + 0.5) {
          cardEl.style.zIndex = '60';
        } else {
          cardEl.style.zIndex = '40';
        }
      });
    };

    const syncDOMElement = (id: string, worldPos: THREE.Vector3, baseZ: number) => {
      const el = document.getElementById(id);
      if (!el) return;

      const screenV = worldPos.clone();
      screenV.project(camera);

      if (Math.abs(screenV.x) > 1.3 || Math.abs(screenV.y) > 1.3 || screenV.z > 1) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      const x = (screenV.x * 0.5 + 0.5) * width;
      const y = (screenV.y * -0.5 + 0.5) * height;

      el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0)`;
      el.style.zIndex = `${baseZ}`;

      // Set active opacity based on hovered category or active section
      const activeSec = activeSectionRef.current;
      const activeFocus = hoveredCategoryRef.current || (selectedCategoryRef.current ? selectedCategoryRef.current.toLowerCase() : null);
      let shouldDim = false;
      
      if (activeSec !== 'Home') {
        shouldDim = true;
      } else if (activeFocus) {
        if (id === 'sphere-label' && activeFocus !== 'frontend') shouldDim = true;
        if (id === 'cube-label' && activeFocus !== 'backend') shouldDim = true;
        if (id === 'pyramid-label' && activeFocus !== 'database') shouldDim = true;
      }

      if (shouldDim) {
        el.style.opacity = '0.05';
        el.style.pointerEvents = 'none';
      } else {
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
      }
    };

    // Set refs for exterior transitions
    cameraRef.current = camera;
    cubeGroupRef.current = cubeGroup;
    pyrGroupRef.current = pyrGroup;

    // Run tick loop
    tick();

    // G. CLEANUP EVENTS AND TIMERS ON UNMOUNT
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      cancelAnimationFrame(animationFrameId);
      
      // Clean scene geometries & materials
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div id="canvas-container" ref={containerRef}>
      {/* 3D Canvas element */}
      <canvas 
        id="webgl-canvas" 
        ref={canvasRef} 
        style={{
          opacity: activeSection === 'Home' ? 1 : 0.15,
          transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      />

      {/* DOM Overlay labels and cards */}
      <div 
        id="dom-overlay"
        style={{
          opacity: (activeSection === 'Home' && !selectedCategory) ? 1 : 0,
          pointerEvents: (activeSection === 'Home' && !selectedCategory) ? 'auto' : 'none',
          transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        
        {/* Core Sphere Label */}
        <div 
          id="sphere-label" 
          className="spatial-label core-label"
          onMouseEnter={() => setHoveredCategory('frontend')}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => onSkillSelect?.('Frontend')}
          style={{ cursor: 'pointer' }}
        >
          <div className="label-glow"></div>
          <div className="label-content">
            <span className="label-tag">{SPATIAL_LABELS.frontend.tag}</span>
            <h2 className="label-title">{SPATIAL_LABELS.frontend.title}</h2>
            <p className="label-desc">{SPATIAL_LABELS.frontend.desc}</p>
          </div>
        </div>

        {/* Cube Label */}
        <div 
          id="cube-label" 
          className="spatial-label secondary-label"
          onMouseEnter={() => setHoveredCategory('backend')}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => onSkillSelect?.('Backend')}
          style={{ cursor: 'pointer' }}
        >
          <div className="label-content">
            <span className="label-tag">{SPATIAL_LABELS.backend.tag}</span>
            <h3 className="label-title">{SPATIAL_LABELS.backend.title}</h3>
            <p className="label-desc">{SPATIAL_LABELS.backend.desc}</p>
          </div>
        </div>

        {/* Pyramid Label */}
        <div 
          id="pyramid-label" 
          className="spatial-label secondary-label"
          onMouseEnter={() => setHoveredCategory('database')}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => onSkillSelect?.('Database')}
          style={{ cursor: 'pointer' }}
        >
          <div className="label-content">
            <span className="label-tag">{SPATIAL_LABELS.database.tag}</span>
            <h3 className="label-title">{SPATIAL_LABELS.database.title}</h3>
            <p className="label-desc">{SPATIAL_LABELS.database.desc}</p>
          </div>
        </div>

        {/* Floating tech cards */}
        <div id="floating-cards-container">
          {TECH_DATA.map((tech) => (
            <div
              key={tech.id}
              id={`card-${tech.id}`}
              className={`tech-card ${hoveredCategory === tech.category ? 'highlighted' : ''}`}
              data-tech={tech.id}
              onMouseEnter={() => setHoveredCategory(tech.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate3d(-50%, -50%, 0)',
                opacity: 0,
                pointerEvents: 'none',
                '--brand-color': tech.color,
              } as React.CSSProperties}
            >
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
