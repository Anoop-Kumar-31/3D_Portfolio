'use client';

import React, { useState, useEffect } from 'react';
import BackgroundGlows from '@/components/BackgroundGlows';
import IntroScreen from '@/components/IntroScreen';
import Navbar from '@/components/Navbar';
import ThreeCanvas from '@/components/ThreeCanvas';
import Footer from '@/components/Footer';
import DotNav from '@/components/DotNav';
import CategoryPanel from '@/components/CategoryPanel';

const SECTIONS = ['Home', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Multi-section scroll and swipe navigation logic
  useEffect(() => {
    if (!isIntroComplete) return;

    let lastScrollTime = 0;
    const cooldown = 900; // ms transition lock to prevent scrolling multiple sections rapidly
    let touchStartY = 0;

    // Helper: check if coordinates are over the category panel
    const isOverPanel = (clientX: number, clientY: number) => {
      const panel = document.querySelector('.category-panel-container');
      if (!panel) return false;
      const rect = panel.getBoundingClientRect();
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );
    };

    const handleWheel = (e: WheelEvent) => {
      // Skip section change if scrolling inside the category panel
      if (isOverPanel(e.clientX, e.clientY)) return;

      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      const currentIndex = SECTIONS.indexOf(activeSection);
      if (e.deltaY > 0) {
        // Scroll Down -> Next Section
        if (currentIndex < SECTIONS.length - 1) {
          setActiveSection(SECTIONS[currentIndex + 1]);
          lastScrollTime = now;
        }
      } else if (e.deltaY < 0) {
        // Scroll Up -> Previous Section
        if (currentIndex > 0) {
          setActiveSection(SECTIONS[currentIndex - 1]);
          lastScrollTime = now;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Skip section change if swiping inside the category panel
      const touch = e.changedTouches[0];
      if (touch && isOverPanel(touch.clientX, touch.clientY)) return;

      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      const currentIndex = SECTIONS.indexOf(activeSection);
      if (diffY > 50) {
        // Swipe Up -> Next Section
        if (currentIndex < SECTIONS.length - 1) {
          setActiveSection(SECTIONS[currentIndex + 1]);
          lastScrollTime = now;
        }
      } else if (diffY < -50) {
        // Swipe Down -> Previous Section
        if (currentIndex > 0) {
          setActiveSection(SECTIONS[currentIndex - 1]);
          lastScrollTime = now;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      const currentIndex = SECTIONS.indexOf(activeSection);
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIndex < SECTIONS.length - 1) {
          setActiveSection(SECTIONS[currentIndex + 1]);
          lastScrollTime = now;
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          setActiveSection(SECTIONS[currentIndex - 1]);
          lastScrollTime = now;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isIntroComplete, activeSection]);

  return (
    <main style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Dynamic Ambient Background */}
      <BackgroundGlows />

      {/* Cinematic opening sequence */}
      {!isIntroComplete && (
        <IntroScreen onComplete={() => setIsIntroComplete(true)} />
      )}

      {/* Main interface loaded and faded in after intro completion */}
      {isIntroComplete && (
        <div id="app-container" className="app-content-fade-in">
          <Navbar activeSection={activeSection} />
          <ThreeCanvas activeSection={activeSection} />
          <CategoryPanel activeSection={activeSection} />
          <DotNav 
            sections={SECTIONS} 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          <Footer />
        </div>
      )}
    </main>
  );
}
