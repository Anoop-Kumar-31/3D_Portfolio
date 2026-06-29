'use client';

import React from 'react';

interface DotNavProps {
  sections: string[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function DotNav({ sections, activeSection, setActiveSection }: DotNavProps) {
  return (
    <nav className="dot-navigation" aria-label="Section Navigation">
      {sections.map((section, idx) => {
        const isActive = activeSection === section;
        const isPill = idx === 0;

        return (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`dot-nav-item ${isPill ? 'pill' : 'circle'} ${isActive ? 'active' : ''}`}
            aria-label={`Go to ${section} section`}
            aria-current={isActive ? 'true' : 'false'}
          >
            <span className="dot-label">{section}</span>
            <span className="dot-indicator" />
          </button>
        );
      })}
    </nav>
  );
}
