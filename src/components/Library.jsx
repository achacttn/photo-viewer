import React from 'react';
import style from './Library.module.css';

const Library = () => {
  React.useEffect(() => {
    console.log('=== Library.jsx ===');
  });

  return (
    <div className={style.LibraryContainer}>
      <div className={style.LibraryContent}>
        Library
      </div>
    </div>
  );
};

export default Library;
