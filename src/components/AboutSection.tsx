'use client';

import React from 'react';
import { workExperience } from '@/data';
import { FiBook, FiAward, FiCode, FiLayers } from 'react-icons/fi';

interface AboutSectionProps {
  activeSection: string;
}

export default function AboutSection({ activeSection }: AboutSectionProps) {
  if (activeSection !== 'About') return null;

  return (
    <div
      className="about-container"
      style={{
        position: 'absolute',
        top: 0,
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '70px 40px 60px',
        overflowY: 'auto',
        animation: 'panelFadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards'
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '5px', color: '#fff', textAlign: 'center' }}>
          About Me
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px' }}>
          A snapshot of my journey, skills, and passion.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

          {/* Left Column: ID Card */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{
              background: 'rgba(8, 14, 28, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                flex: 1,
                minHeight: 0,
                borderRadius: '16px',
                backgroundImage: 'url("/MyImage.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '20px',
                backgroundRepeat: 'no-repeat',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }} />
              <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '8px', textAlign: 'center' }}>
                Anoop Kumar
              </h2>
              <p style={{ color: 'var(--accent-color)', fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '10px' }}>
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Right Column: Bio, Education, Work Experience */}
          <div style={{ flex: '2', minWidth: '350px', display: 'flex', flexDirection: 'column', gap: '30px' }}>

            {/* Bio Summary */}
            <div style={{
              background: 'rgba(8, 14, 28, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '30px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiCode /> Executive Summary
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.7 }}>
                A tech enthusiast, <strong>Full-Stack Developer</strong>, and novel author passionate about building modern, user-centric web applications. As a <strong><em>T-shaped developer</em></strong>, I specialize in <strong><em>frontend engineering</em></strong> with a strong foundation in <strong><em>JavaScript-based backend development</em></strong>. I also have experience in <em>REST API development</em>, <em>database architecture</em>, <em>UI/UX design</em>, <em>technical documentation</em>, and <em>application testing</em>.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
                {[
                  'Frontend Engineering',
                  'Backend Development',
                  'REST APIs',
                  'Database Design',
                  'UI/UX Design',
                  'Performance Optimization',
                  'Technical Documentation'
                ].map((skill, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#fff' }}>
                    {skill}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '20px', marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiAward /> Education
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png" style={{
                  width: 'fit-content', height: '60px', borderRadius: '5px', background: '#fff', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '5px' }}>Chandigarh University</h4>
                  <p style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>Bachelor of Engineering (B.E) in Computer Science & Engineering</p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
