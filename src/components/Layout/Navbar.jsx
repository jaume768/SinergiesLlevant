import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './css/Navbar.css';

const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const brandLink = !authState.loading && authState.token ? '/dashboard' : '/';

  return (
    <nav className="navbar">
      <Link to={brandLink} className="navbar-brand">
        TravelDaring
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/suggested">Sugeridos</Link>
        {!authState.loading && authState.token ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/profile">Perfil</Link>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;