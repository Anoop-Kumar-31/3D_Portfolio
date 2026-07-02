'use client';

import React, { useState } from 'react';
import { projects } from '@/data';
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ProjectsSectionProps {
  activeSection: string;
}

export default function ProjectsSection({ activeSection }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (activeSection !== 'Projects') return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div 
      className="projects-container" 
      style={{
        position: 'absolute',
        top: 0,
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px 50px',
        pointerEvents: 'none',
        animation: 'panelFadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards'
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', pointerEvents: 'auto', height: '100%' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '5px', color: '#fff', textAlign: 'center' }}>
            Project Work
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px' }}>
            A collection of projects bridging the gap between innovative design and robust engineering.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100%s'}}>
          
          <button 
            onClick={handlePrev}
            style={{
              position: 'absolute', left: '0', zIndex: 10,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', width: '40px', height: '40px', borderRadius: '50%',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <FiChevronLeft size={28} />
          </button>

          <div 
            className="project-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '30px',
              background: 'rgba(8, 14, 28, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '30px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              width: '100%',
              height:'450px',
              margin: '0 20px',
              justifySelf:'center',
              alignSelf:'center'
            }}
          >
            <div 
              className="project-image-container"
              style={{
                flex: '1',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '280px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${project.project_img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: 'pointer'
                }}
                className="project-image-bg"
                onClick={() => setSelectedProject(project)}
              />
              
              {project.isFeatured && (
                <div style={{
                  position: 'absolute', top: '15px', left: '15px',
                  background: 'rgba(0, 242, 254, 0.2)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 242, 254, 0.4)', color: '#00f2fe',
                  padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase'
                }}>
                  Featured
                </div>
              )}
            </div>

            <div 
              className="project-content-container"
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-blue)', letterSpacing: '1.2px', textTransform: 'uppercase', display: 'block', fontWeight:'bold' }}>
                  {project.category} • {project.period}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                  {currentIndex + 1} / {projects.length}
                </span>
              </div>
              
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.1' }}>
                {project.title}
              </h2>
              
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px', lineHeight: '1.4' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '4px 10px', borderRadius: '16px', fontSize: '0.75rem', color: '#fff'
                  }}>
                    {tech}
                  </span>
                ))}
                {/* {project.techStack.length > 5 && (
                  <span style={{
                    background: 'transparent', padding: '4px 8px', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    +{project.techStack.length - 5} more
                  </span>
                )} */}
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: 'auto', justifyContent:'space-between' }}>
                <button 
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'var(--accent-color)', color: '#fff', border: 'none',
                    padding: '10px 24px', borderRadius: '24px', fontSize: '0.9rem', fontWeight: 600,
                    cursor: 'pointer', boxShadow: '0 0px 5px rgba(0, 242, 254, 0.5)'
                  }}
                  className="view-case-btn"
                >
                  View Case Study
                </button>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center'}}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-icon-link" title="Live Project">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  {project.githubRepo && (
                    <a href={typeof project.githubRepo === 'string' ? project.githubRepo : project.githubRepo.JuctionModuleRepo || project.githubRepo.frontend} target="_blank" rel="noreferrer" className="project-icon-link" title="GitHub Repository">
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            style={{
              position: 'absolute', right: '0px', zIndex: 10,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', width: '40px', height: '40px', borderRadius: '50%',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <FiChevronRight size={28} />
          </button>
        </div>
      </div>

      {selectedProject && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999999,
          background: 'rgba(5, 10, 21, 0.8)', backdropFilter: 'blur(15px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px',
          pointerEvents: 'auto',
        }}>
          <div style={{
            background: '#0a1224', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px', width: '100%', maxWidth: '800px', maxHeight: '85vh',
            overflowY: 'auto', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }} className="modal-content">
            
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.1)',
                border: 'none', color: '#fff', width: '35px', height: '35px', borderRadius: '50%',
                display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10
              }}
            >
              <FiX size={18} />
            </button>

            <div style={{
              width: '100%', height: '220px', backgroundImage: `url('${selectedProject.project_img}')`,
              backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'
            }}>
              <div style={{
                position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #0a1224)'
              }} />
            </div>

            <div style={{ padding: '0 40px 40px', position: 'relative', top: '-40px' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                {selectedProject.businessContext}
              </span>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '8px 0 25px', lineHeight: 1.1 }}>
                {selectedProject.title}
              </h1>

              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ flex: '2', minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#00f2fe' }}>The Challenge</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '25px', fontSize: '0.95rem' }}>
                    {selectedProject.problemSolutionImpact.problem}
                  </p>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#00f2fe' }}>The Solution</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '25px', fontSize: '0.95rem' }}>
                    {selectedProject.problemSolutionImpact.solution}
                  </p>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#00f2fe' }}>The Impact</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '25px', fontSize: '0.95rem' }}>
                    {selectedProject.problemSolutionImpact.impact}
                  </p>
                </div>

                <div style={{ flex: '1', minWidth: '250px', background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.1rem' }}>Technologies Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '6px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '25px 0' }} />

                  <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.1rem' }}>Links</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00f2fe', textDecoration: 'none' }}>
                        <FiExternalLink /> Live Application
                      </a>
                    )}
                    
                    {typeof selectedProject.githubRepo === 'string' ? (
                      <a href={selectedProject.githubRepo} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none' }}>
                        <FiGithub /> Source Code
                      </a>
                    ) : (
                      <>
                        {selectedProject.githubRepo.frontend && (
                          <a href={selectedProject.githubRepo.frontend} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none' }}>
                            <FiGithub /> Frontend Repo
                          </a>
                        )}
                        {selectedProject.githubRepo.backend && (
                          <a href={selectedProject.githubRepo.backend} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none' }}>
                            <FiGithub /> Backend Repo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div style={{ marginTop: '40px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#fff' }}>Project Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {selectedProject.gallery.map((img, i) => (
                      <div key={i} style={{ 
                        height: '160px', borderRadius: '12px', backgroundImage: `url('${img}')`, 
                        backgroundSize: 'cover', backgroundPosition: 'top center', border: '1px solid rgba(255,255,255,0.1)'
                      }} />
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
