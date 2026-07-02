'use client';

import React from 'react';
import { SECTION_DATA } from '@/data';

interface SkillsListProps {
  activeSection: string;
}

export default function SkillsList({ activeSection }: SkillsListProps) {
  if (activeSection !== 'Skills') return null;

  return (
    <div 
      className="skills-list-container" 
      style={{
        position: 'absolute',
        top: 0,
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 40px 60px',
        overflowY: 'auto',
        animation: 'panelFadeIn 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards'
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '10px', color: '#fff' }}>All Skills</h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '40px' }}>
          A comprehensive overview of the technologies I work with.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {Object.entries(SECTION_DATA).map(([categoryName, data]) => (
            <div 
              key={categoryName}
              style={{
                background: 'rgba(8, 14, 28, 0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                padding: '20px ',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>
                {data.tag}
              </span>
              <h2 style={{ fontSize: '1.8rem', margin: '10px 0 20px', color: '#fff' }}>
                {data.title}
              </h2>
              
              <div className="category-tech-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
                {data.techs.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="category-tech-item"
                    style={{ '--brand-color': tech.color } as React.CSSProperties}
                  >
                    <div className="category-tech-icon">
                      {tech.icon}
                    </div>
                    <span className="category-tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
