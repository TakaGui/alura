import React from 'react';
import { Link } from 'react-router-dom';

import doguitoLogo from '../assets/img/doguito.svg';
import '../assets/css/components/header.css';

export const Header = () => {
  return (
    <header className="header container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icon">
        </span>
      </div>
      <div className="header-container">
        <a href="/" className="flex flex--center">
          <img className="header__logo" src={doguitoLogo} alt="Logo Doguito" />
          <h1 className="header__title">
            PetShop
          </h1>
        </a>
      </div>

      <nav className="menu-header">
        <ul className="menu-items">
          <li>
            <Link to="#" className="menu-item menu-item--login">
              Entrar
            </Link>
          </li>

          <li>
            <Link to="#" className="menu-item">
              Produtos
            </Link>
          </li>

          <li>
            <Link to="/" className="menu-item">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>

      <div className="menu-header-background"></div>
    </header>
  );
}
