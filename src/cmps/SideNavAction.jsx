import React from 'react';
import { Link } from 'react-router-dom';

export function SideNavAction({ name, link, icon, active, onClick }) {
  return (
    <Link to={link} className={`side-nav-action ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="side-nav-item">
        <div className="side-nav-icon">
          {icon}
        </div>
        <span className="side-nav-text">{name}</span>
      </div>
    </Link>
  );
}
