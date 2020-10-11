import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../assets/logo.png';
import iconHome from '../assets/icon-home.svg';
import iconAbout from '../assets/icon-about.svg';
import iconLayoutGrid from '../assets/layout-option-grid.svg';
import iconLayoutSingle from '../assets/layout-option-single.svg';

const Header = () => {
  const currentLocation = useLocation();

  return (
    <div className={style.HeaderContainer}>
      <div className={style.HeaderContent}>
        <img className={style.MainLogo} src={logo} alt="App Logo" />
        <h1 className={style.MainTitle}>Photo Viewer</h1>
        <Link to="/"><img className={style.HeaderIcon} src={iconHome} alt="Home icon" /></Link>
        <Link to="/about"><img className={style.HeaderIcon} src={iconAbout} alt="About icon" /></Link>
        {
            currentLocation.pathname === '/'
            && (
            <div className={style.ViewSettings}>
              <img className={style.HeaderIcon} src={iconLayoutGrid} alt="Grid layout" />
              <img className={style.HeaderIcon} src={iconLayoutSingle} alt="Single layout" />
            </div>
            )
        }

      </div>
    </div>
  );
};

export default Header;
