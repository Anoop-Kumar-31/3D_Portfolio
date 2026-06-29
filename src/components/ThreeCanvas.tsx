'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import {
  // Frontend
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,

  // Backend
  SiNodedotjs,
  SiExpress,

  // Database
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,

  // State Management
  SiRedux,

  // API & Auth
  SiAxios,
  SiJsonwebtokens,
  SiSocket,

  // DevOps
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiGithubactions,

  // Design
  SiFigma,

  // Languages
  SiPython,

  // Tools
  SiLinux,
  SiPostman,
  SiNpm,

  // Build Tools
  SiVite,

  // Container / Runtime
  SiUbuntu,

  // Package Managers
  SiYarn,

} from "react-icons/si";

// Tech data items with React Icons brand components mapped to core spatial categories
const techData = [
  // Frontend
  { id: 'html5', name: 'HTML5', category: 'frontend', color: '#e34c26', icon: <SiHtml5 /> },
  { id: 'css3', name: 'CSS3', category: 'frontend', color: '#1572b6', icon: <SiCss /> },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', color: '#f7df1e', icon: <SiJavascript /> },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', color: '#3178c6', icon: <SiTypescript /> },
  { id: 'react', name: 'React', category: 'frontend', color: '#61dafb', icon: <SiReact /> },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', color: '#ffffff', icon: <SiNextdotjs /> },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', color: '#06b6d4', icon: <SiTailwindcss /> },
  { id: 'redux', name: 'Redux', category: 'frontend', color: '#764abc', icon: <SiRedux /> },
  { id: 'figma', name: 'Figma', category: 'frontend', color: '#f24e1e', icon: <SiFigma /> },
  { id: 'vite', name: 'Vite', category: 'frontend', color: '#646cff', icon: <SiVite /> },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', color: '#339933', icon: <SiNodedotjs /> },
  { id: 'express', name: 'Express.js', category: 'backend', color: '#ffffff', icon: <SiExpress /> },
  { id: 'firebase', name: 'Firebase', category: 'backend', color: '#ffca28', icon: <SiFirebase /> },
  { id: 'axios', name: 'Axios', category: 'backend', color: '#5a29e5', icon: <SiAxios /> },
  { id: 'socket', name: 'Socket.IO', category: 'backend', color: '#ffffff', icon: <SiSocket /> },
  { id: 'jwt', name: 'JWT', category: 'backend', color: '#fb015b', icon: <SiJsonwebtokens /> },
  { id: 'python', name: 'Python', category: 'backend', color: '#3776ab', icon: <SiPython /> },
  { id: 'postman', name: 'Postman', category: 'backend', color: '#ff6c37', icon: <SiPostman /> },
  { id: 'npm', name: 'npm', category: 'backend', color: '#cb3837', icon: <SiNpm /> },
  { id: 'yarn', name: 'Yarn', category: 'backend', color: '#2c8ebb', icon: <SiYarn /> },

  // Database
  { id: 'postgres', name: 'PostgreSQL', category: 'database', color: '#336791', icon: <SiPostgresql /> },
  { id: 'mongodb', name: 'MongoDB', category: 'database', color: '#47a248', icon: <SiMongodb /> },
  { id: 'redis', name: 'Redis', category: 'database', color: '#dc382d', icon: <SiRedis /> },
  { id: 'docker', name: 'Docker', category: 'database', color: '#2496ed', icon: <SiDocker /> },
  { id: 'nginx', name: 'Nginx', category: 'database', color: '#009639', icon: <SiNginx /> },
  { id: 'git', name: 'Git', category: 'database', color: '#f05032', icon: <SiGit /> },
  { id: 'github', name: 'GitHub', category: 'database', color: '#ffffff', icon: <SiGithub /> },
  { id: 'githubactions', name: 'GitHub Actions', category: 'database', color: '#2088ff', icon: <SiGithubactions /> },
  { id: 'linux', name: 'Linux', category: 'database', color: '#fcc624', icon: <SiLinux /> },
  { id: 'ubuntu', name: 'Ubuntu', category: 'database', color: '#e95420', icon: <SiUbuntu /> }
];

// Helper to map active sections dynamically to camera targets
const getCameraTargetForSection = (
  section: string,
  isMobile: boolean,
  isTablet: boolean,
  cubePos: THREE.Vector3,
  pyrPos: THREE.Vector3
) => {
  switch (section) {
    case 'Home':
      return { x: 0, y: 0, z: 15 };
    case 'Frontend':
      return { x: 0, y: 0.3, z: isMobile ? 6.5 : 8.5 };
    case 'Backend':
      return { x: cubePos.x * 0.7, y: cubePos.y * 0.8, z: isMobile ? 7.0 : 9.0 };
    case 'Database':
      return { x: pyrPos.x * 0.7, y: pyrPos.y * 0.8, z: isMobile ? 7.0 : 9.0 };
    case 'DevOps':
      return { x: pyrPos.x * 0.5, y: pyrPos.y * 0.8, z: isMobile ? 6.0 : 8.0 };
    case 'Tools':
      return { x: 0, y: isMobile ? -2.2 : -1.8, z: isMobile ? 6.5 : 8.5 };
    default:
      return { x: 0, y: 0, z: 15 };
  }
};

interface ThreeCanvasProps {
  activeSection: string;
}

export default function ThreeCanvas({ activeSection }: ThreeCanvasProps) {
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

  // Camera zoom transitions on activeSection change
  useEffect(() => {
    if (!cameraRef.current || !cubeGroupRef.current || !pyrGroupRef.current) return;

    const camera = cameraRef.current;
    const cubeGroup = cubeGroupRef.current;
    const pyrGroup = pyrGroupRef.current;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const target = getCameraTargetForSection(
      activeSection,
      isMobile,
      isTablet,
      cubeGroup.position,
      pyrGroup.position
    );

    gsap.killTweensOf(camera.position);

    gsap.to(camera.position, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.6,
      ease: 'power3.inOut',
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      }
    });
  }, [activeSection]);

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
    const ambientLight = new THREE.AmbientLight(0x0a101f, 2.0);
    scene.add(ambientLight);

    const centralLight = new THREE.PointLight(0x00f2fe, 15, 25, 1.8);
    centralLight.position.set(0, 0, 0);
    masterGroup.add(centralLight);

    const fillLight = new THREE.PointLight(0x7f00ff, 8, 20, 2);
    fillLight.position.set(5, -2, -2);
    masterGroup.add(fillLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // C. BUILD 3D GEOMETRIES
    // 1. Central Sphere (Frontend)
    const centralGroup = new THREE.Group();
    const innerGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x050f24,
      emissive: 0x004488,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    centralGroup.add(innerSphere);

    const outerGeo = new THREE.IcosahedronGeometry(1.85, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.4
    });
    const outerCage = new THREE.Mesh(outerGeo, outerMat);
    centralGroup.add(outerCage);
    masterGroup.add(centralGroup);

    // 2. Cube (Backend)
    const cubeGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x4facfe,
      emissive: 0x0a224c,
      roughness: 0.2,
      metalness: 0.7,
      transmission: 0.7,
      thickness: 0.6,
      transparent: true,
      opacity: 0.85
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeGroup.add(cubeMesh);

    const cubeEdges = new THREE.EdgesGeometry(cubeGeo);
    const cubeLineMat = new THREE.LineBasicMaterial({ color: 0x4facfe, linewidth: 1.5 });
    const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeLineMat);
    cubeGroup.add(cubeWireframe);
    masterGroup.add(cubeGroup);

    // 3. Pyramid (Database)
    const pyrGroup = new THREE.Group();
    const pyrGeo = new THREE.ConeGeometry(0.7, 1.3, 4);
    const pyrMat = new THREE.MeshPhysicalMaterial({
      color: 0x7f00ff,
      emissive: 0x22054c,
      roughness: 0.2,
      metalness: 0.7,
      transmission: 0.7,
      thickness: 0.6,
      transparent: true,
      opacity: 0.85
    });
    const pyrMesh = new THREE.Mesh(pyrGeo, pyrMat);
    pyrMesh.rotation.y = Math.PI / 4;
    pyrGroup.add(pyrMesh);

    const pyrEdges = new THREE.EdgesGeometry(pyrGeo);
    const pyrLineMat = new THREE.LineBasicMaterial({ color: 0x7f00ff, linewidth: 1.5 });
    const pyrWireframe = new THREE.LineSegments(pyrEdges, pyrLineMat);
    pyrWireframe.rotation.y = Math.PI / 4;
    pyrGroup.add(pyrWireframe);
    masterGroup.add(pyrGroup);

    // 4. Background Starry Dust Particles
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4facfe,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
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

    // Generate local properties for tech cards
    const cardsLocalData = techData.map((tech, i) => {
      const initialAngle = (i / techData.length) * Math.PI * 2;
      let yOffset = 0;
      if (tech.category === 'backend') {
        yOffset = 1.8;
      } else if (tech.category === 'database') {
        yOffset = -1.8;
      } else {
        yOffset = 0;
      }
      return {
        id: tech.id,
        category: tech.category,
        angle: initialAngle,
        angleOffset: Math.random() * Math.PI,
        y: yOffset
      };
    });

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

    // Mouse Drag events (WebGL space orbit rotation)
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
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

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    canvas.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

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
        const speed = hoveredCategoryRef.current === card.category ? 0.0006 : 0.002;
        card.angle += speed;

        const localPos = new THREE.Vector3(
          Math.cos(card.angle) * orbitRadiusX,
          card.y + Math.sin(card.angle * 2.5 + card.angleOffset) * 0.35,
          Math.sin(card.angle) * orbitRadiusZ
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
        let belongsToActiveSection = true;

        if (activeSec && activeSec !== 'Home') {
          if (activeSec === 'Frontend' && card.category !== 'frontend') {
            belongsToActiveSection = false;
          } else if (activeSec === 'Backend' && card.category !== 'backend') {
            belongsToActiveSection = false;
          } else if (activeSec === 'Database' && card.category !== 'database') {
            belongsToActiveSection = false;
          } else if (activeSec === 'DevOps') {
            const isDevOps = card.id === 'docker' || card.id === 'nginx' || card.id === 'git' || card.id === 'github' || card.id === 'githubactions';
            if (!isDevOps) belongsToActiveSection = false;
          } else if (activeSec === 'AI & ML') {
            const isAI = card.id === 'python' || card.id === 'opencv' || card.id === 'tensorflow' || card.id === 'pytorch' || card.id === 'scikitlearn';
            if (!isAI) belongsToActiveSection = false;
          } else if (activeSec === 'Tools') {
            const isTool = card.id === 'linux' || card.id === 'ubuntu' || card.id === 'postman' || card.id === 'npm' || card.id === 'yarn' || card.id === 'vite';
            if (!isTool) belongsToActiveSection = false;
          }
        }

        // Fading of non-hovered categories or non-active sections
        if (!belongsToActiveSection) {
          opacity *= 0.05;
          scale *= 0.85;
        } else if (hoveredCategoryRef.current && card.category !== hoveredCategoryRef.current) {
          opacity *= 0.3;
          scale *= 0.9;
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
      let shouldDim = false;
      if (activeSec && activeSec !== 'Home') {
        if (id === 'sphere-label' && activeSec !== 'Frontend') {
          shouldDim = true;
        } else if (id === 'cube-label' && activeSec !== 'Backend' && activeSec !== 'AI & ML') {
          shouldDim = true;
        } else if (id === 'pyramid-label' && activeSec !== 'Database' && activeSec !== 'DevOps' && activeSec !== 'Tools') {
          shouldDim = true;
        }
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
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

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
          opacity: activeSection === 'Home' ? 1 : 0,
          pointerEvents: activeSection === 'Home' ? 'auto' : 'none',
          transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        
        {/* Core Sphere Label */}
        <div 
          id="sphere-label" 
          className="spatial-label core-label"
          onMouseEnter={() => setHoveredCategory('frontend')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="label-glow"></div>
          <div className="label-content">
            <span className="label-tag">CORE WORKSPACE</span>
            <h2 className="label-title">Front-End Dev</h2>
            <p className="label-desc">Crafting highly interactive, responsive, and immersive interfaces.</p>
          </div>
        </div>

        {/* Cube Label */}
        <div 
          id="cube-label" 
          className="spatial-label secondary-label"
          onMouseEnter={() => setHoveredCategory('backend')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="label-content">
            <span className="label-tag">SYSTEM LOGIC</span>
            <h3 className="label-title">Back-End Dev</h3>
            <p className="label-desc">Designing scalable services, RESTful APIs, and architectural flow.</p>
          </div>
        </div>

        {/* Pyramid Label */}
        <div 
          id="pyramid-label" 
          className="spatial-label secondary-label"
          onMouseEnter={() => setHoveredCategory('database')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="label-content">
            <span className="label-tag">INFRASTRUCTURE</span>
            <h3 className="label-title">Architecture Dev</h3>
            <p className="label-desc">Managing relational & NoSQL data, orchestration, and deployments.</p>
          </div>
        </div>

        {/* Floating tech cards */}
        <div id="floating-cards-container">
          {techData.map((tech) => (
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
