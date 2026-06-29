'use client';

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [displayedText, setDisplayedText] = useState(activeSection);
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    if (activeSection !== displayedText) {
      setIsBlurring(true);
      const timer = setTimeout(() => {
        setDisplayedText(activeSection);
        setIsBlurring(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [activeSection, displayedText]);

  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-name">ANOOP KUMAR</span>
        <span className="brand-divider">|</span>
        <span className="brand-title">Full Stack DEV</span>
      </div>
      
      <nav className="nav-menu" aria-label="Main Navigation">
        <a 
          href="#section" 
          className={`nav-link active ${isBlurring ? 'blur-out' : 'blur-in'}`}
          onClick={(e) => e.preventDefault()}
        >
          {displayedText}
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link nav-icon" 
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link nav-icon" 
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </nav>
    </header>
  );
}
