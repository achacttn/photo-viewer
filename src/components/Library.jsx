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
          processedData.map( dataObj => <div><img src={dataObj.urls.thumb} alt=""/></div>)
        }
      </div>
    </div>
  );
}

export default Library;
