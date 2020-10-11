import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../assets/logo.png';
import iconHome from '../assets/icon-home.svg';
import iconAbout from '../assets/icon-about.svg';
import iconLayout1 from '../assets/layout1.svg';
import iconLayout2 from '../assets/layout2.svg';
import iconLayout3 from '../assets/layout3.svg';

const Header = ({ currentLayoutMode, toggleLayout }) => {

  const determineNextLayout = () => {
    switch (currentLayoutMode) {
      case 0:
        return iconLayout1;
      case 1:
        return iconLayout2;
      case 2:
        return iconLayout3
      default:
        break;
    }
  }

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
            && 
            <div className={style.Settings}>
              <img className={style.DisplayMode} src={determineNextLayout()} alt="" onClick={toggleLayout}/>

            </div>
        }

      </div>
    </div>
  );
};

export default Header;
