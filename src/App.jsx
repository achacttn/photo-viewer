import { hot } from 'react-hot-loader';
import React from 'react';
import Wrapper from './Layout/Wrapper';
import style from './App.module.css';
import Header from './components/Header';
import Library from './components/Library';

const App = () => (
  <Wrapper>
    <div className={style.AppContainer}>
      <div className={style.AppContent}>
        <div className={style.HeaderContainer}>
          <Header />
        </div>
        <div className={style.LibraryContainer}>
          <Library />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default hot(module)(App);
