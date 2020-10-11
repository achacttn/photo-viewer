import React from 'react';
import style from './About.module.css';

const About = () => {
  React.useEffect(() => {
    console.log('=== About.jsx ===');
  });

  return (
    <div className={style.AboutContainer}>
      <div className={style.AboutContent}>
        About
      </div>
    </div>
  );
};

export default About;
