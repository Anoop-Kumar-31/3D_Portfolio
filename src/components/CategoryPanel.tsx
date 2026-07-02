'use client';

import React from 'react';
import { SECTION_DATA } from '@/data';

interface CategoryPanelProps {
  selectedCategory: string | null;
  onClose: () => void;
}

export default function CategoryPanel({ selectedCategory, onClose }: CategoryPanelProps) {
  if (!selectedCategory) return null;
  
  // Format string correctly to match keys if needed, but we can assume selectedCategory will be exactly 'Frontend', 'Backend', or 'Database'.
  const data = SECTION_DATA[selectedCategory];
  if (!data) return null;

  return (
    <div className="category-panel-container">
      <button 
        onClick={()=>onClose()}
        style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem', 
          background: 'none', border: 'none', color: '#fff', 
          cursor: 'pointer', fontSize: '1.5rem', opacity: 0.6
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
      >
        &times;
      </button>
      <span className="category-panel-tag">{data.tag}</span>
      <h2 className="category-panel-title">{data.title}</h2>
      <p className="category-panel-desc">{data.desc}</p>
      
      <div className="category-panel-divider" />
      
      <div className="category-tech-grid">
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
  );
}
