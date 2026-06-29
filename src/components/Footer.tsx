import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="hint-container">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
        <span className="hint-text">
          Hover shapes and logos to explore connections. Drag to rotate space.
        </span>
      </div>
      <div className="copyright">
        &copy; 2026 Anoop Kumar. All rights reserved.
      </div>
    </footer>
  );
}
