import React from 'react';
import style from './Header.module.css';
import mainLogo from '../assets/photo-viewer-app-logo.png';
// import logo from '../assets/pictures.png';

const Header = () => {
  React.useEffect(() => {
    console.log('=== Header.jsx ===');
  });

  return (
    <div className={style.HeaderContainer}>
      <div className={style.HeaderContent}>
        <img className={style.MainLogo} src={mainLogo} alt="App Logo" />
        {/* <img className={style.MainLogo} src={logo} alt="App Logo" /> */}
        <div>Link (Home)</div>
        <div>Link (About)</div>
        <div>
          <div>Grid view</div>
          <div>List view</div>
        </div>

      </div>
    </div>
  );
};

export default Header;
