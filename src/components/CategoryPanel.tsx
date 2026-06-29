'use client';

import React from 'react';
import {
  // Frontend
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFigma,
  SiVite,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiAxios,
  SiSocket,
  SiJsonwebtokens,
  SiPython,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPostman,
  SiNpm,
  SiYarn,

  // Database
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiUbuntu
} from 'react-icons/si';

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const SECTION_DATA: Record<string, {
  tag: string;
  title: string;
  desc: string;
  techs: TechItem[];
}> = {
  Frontend: {
    tag: 'frontend/JS/UI',
    title: 'Frontend Development',
    desc: 'Crafting highly interactive, responsive, and pixel-perfect user interfaces with modern styling and frameworks.',
    techs: [
      { name: 'HTML5', color: '#e34c26', icon: <SiHtml5 /> },
      { name: 'CSS3', color: '#1572b6', icon: <SiCss /> },
      { name: 'JavaScript', color: '#f7df1e', icon: <SiJavascript /> },
      { name: 'TypeScript', color: '#3178c6', icon: <SiTypescript /> },
      { name: 'React', color: '#61dafb', icon: <SiReact /> },
      { name: 'Next.js', color: '#ffffff', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', color: '#06b6d4', icon: <SiTailwindcss /> },
      { name: 'Redux', color: '#764abc', icon: <SiRedux /> },
      { name: 'Figma', color: '#f24e1e', icon: <SiFigma /> },
      { name: 'Vite', color: '#646cff', icon: <SiVite /> }
    ]
  },
  Backend: {
    tag: 'backend/API/MVC',
    title: 'Backend Architecture',
    desc: 'Designing scalable microservices, RESTful and GraphQL APIs, and orchestrating server-side system logic.',
    techs: [
      { name: 'Node.js', color: '#339933', icon: <SiNodedotjs /> },
      { name: 'Express.js', color: '#ffffff', icon: <SiExpress /> },
      { name: 'Firebase', color: '#ffca28', icon: <SiFirebase /> },
      { name: 'Axios', color: '#5a29e5', icon: <SiAxios /> },
      { name: 'Socket.IO', color: '#ffffff', icon: <SiSocket /> },
      { name: 'JWT', color: '#fb015b', icon: <SiJsonwebtokens /> },
      { name: 'Python', color: '#3776ab', icon: <SiPython /> },
      { name: 'Postman', color: '#ff6c37', icon: <SiPostman /> },
      { name: 'npm', color: '#cb3837', icon: <SiNpm /> },
      { name: 'Yarn', color: '#2c8ebb', icon: <SiYarn /> }
    ]
  },
  Database: {
    tag: 'database/CI/CD/Docker',
    title: 'Database & Infrastructure',
    desc: 'Managing relational, document, and cache databases alongside basic cloud deployments and container setups.',
    techs: [
      { name: 'PostgreSQL', color: '#336791', icon: <SiPostgresql /> },
      { name: 'MongoDB', color: '#47a248', icon: <SiMongodb /> },
      { name: 'Redis', color: '#dc382d', icon: <SiRedis /> },
      { name: 'Docker', color: '#2496ed', icon: <SiDocker /> },
      { name: 'Nginx', color: '#009639', icon: <SiNginx /> },
      { name: 'Git', color: '#f05032', icon: <SiGit /> },
      { name: 'GitHub', color: '#ffffff', icon: <SiGithub /> },
      { name: 'GitHub Actions', color: '#2088ff', icon: <SiGithubactions /> },
      { name: 'Linux', color: '#fcc624', icon: <SiLinux /> },
    ]
  },
  DevOps: {
    tag: 'devops/CI/CD/Git',
    title: 'DevOps & Pipeline Automation',
    desc: 'Automating build pipelines, setting up container orchestration, and managing version control repositories.',
    techs: [
      { name: 'Docker', color: '#2496ed', icon: <SiDocker /> },
      { name: 'Nginx', color: '#009639', icon: <SiNginx /> },
      { name: 'Git', color: '#f05032', icon: <SiGit /> },
      { name: 'GitHub', color: '#ffffff', icon: <SiGithub /> },
      { name: 'GitHub Actions', color: '#2088ff', icon: <SiGithubactions /> }
    ]
  },
  Tools: {
    tag: 'tools/OS/PM',
    title: 'Development Tools & Utilities',
    desc: 'Configuring modern package registries, command lines, scripting runtimes, and local testing sandboxes.',
    techs: [
      { name: 'Linux', color: '#fcc624', icon: <SiLinux /> },
      { name: 'Ubuntu', color: '#e95420', icon: <SiUbuntu /> },
      { name: 'Postman', color: '#ff6c37', icon: <SiPostman /> },
      { name: 'npm', color: '#cb3837', icon: <SiNpm /> },
      { name: 'Yarn', color: '#2c8ebb', icon: <SiYarn /> },
      { name: 'Vite', color: '#646cff', icon: <SiVite /> }
    ]
  }
};

interface CategoryPanelProps {
  activeSection: string;
}

export default function CategoryPanel({ activeSection }: CategoryPanelProps) {
  const data = SECTION_DATA[activeSection];
  if (!data) return null;

  return (
    <div className="category-panel-container">
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
