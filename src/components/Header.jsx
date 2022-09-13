import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="profile-box">
        <Link to="/lancamentos">
          <p className="title-header">Lançamentos</p>
        </Link>
      </div>
      <div className="profile-box">
        <Link to="/valores">
          <p className="title-header">Valores</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
