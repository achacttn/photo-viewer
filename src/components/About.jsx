import React from 'react';
import style from './About.module.css';
import about01 from '../assets/about/about01.jpeg';
import about02 from '../assets/about/about02.jpg';
import about03 from '../assets/about/about03.jpeg';
import about04 from '../assets/about/about04.jpg';
import about05 from '../assets/about/about05.jpg';
import about06 from '../assets/about/about06.jpg';

const About = () => {
  React.useEffect(() => {
    console.log('=== About.jsx ===');
  });

  return (
    <div className={style.AboutContainer}>
      <div className={style.AboutContent}>
        <p>Hello! My name is Scott (or 이창)</p>
        <p>Here is a little about me.</p>
        <p>I am from New Zealand, but I have also lived in Russia.</p>
        <img src={about01} alt=""/>
        <p>I have one sibling - younger sister (dad took the picture)</p>
        <img src={about02} alt=""/>
        <p>And a cat, Benji!</p>
        <img src={about03} alt=""/>
        <p>Just before the virus, I visited Japan. (Can you guess where this is?)</p>
        <img src={about04} alt=""/>
        <p>My favourite films include 12 Angry Men...</p>
        <img src={about05} alt=""/>
        <p>and Princess Mononoke.</p>
        <img src={about06} alt=""/>
        <p>I like science, but also enjoy broad range of topics like such as psychology, geopolitics, and history.</p>
        <p>Thanks for visiting this page!</p>
      </div>
    </div>
  );
};

export default About;
