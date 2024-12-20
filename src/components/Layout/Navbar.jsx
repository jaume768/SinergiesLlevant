import { FaSearch } from 'react-icons/fa';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './css/Navbar.css';

const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const brandLink = !authState.loading && authState.token ? '/dashboard' : '/';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to={brandLink} className="navbar-brand">
        TravelDaring
      </Link>
      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit"><FaSearch className="search-icon" /></button>
      </form>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/suggested">Sugeridos</Link>
        {!authState.loading && authState.token ? (
          <>
            <Link to="/">Inicio</Link>
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