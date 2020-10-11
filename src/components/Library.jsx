import React from 'react';
import style from './Library.module.css';

const Library = ({ processedData }) =>{

  React.useEffect(() => {
    console.log('=== Library.jsx ===');
    console.log('processedData: ', processedData);
  });

  return (
    <div className={style.LibraryContainer}>
      <div className={style.LibraryContent}>
        {
          processedData.map( dataObj => <div>{ JSON.stringify(dataObj) }</div>)
        }
      </div>
    </div>
  );
}

export default Library;
