import React from 'react';
import style from './Library.module.css';

const Frame = ({ currentLayout, dataObj }) => {
  const [closeup, setCloseup] = React.useState(false);

  const capitalize =  strng => strng.charAt(0).toUpperCase() + strng.slice(1);

  const determineFrameContainerClass = () => {
    switch (currentLayout) {
      case 0:
        return style.FrameContainer1;
      case 1:
        return style.FrameContainer2;
      case 2:
        return style.FrameContainer3;
      default:
        return style.FrameContainer1;
    }
  }
  
  return (
    <div className={determineFrameContainerClass()}>
      <img className={style.FrameImage} src={dataObj.urls.regular} alt={dataObj.alt_description} onClick={()=>setCloseup(!closeup)}/>
      { closeup && <div className={style.Lightbox}>
        <div className={style.LightboxContent} onClick={() => setCloseup(false)}>
          <img className={style.LightboxImage} src={dataObj.urls.regular} alt=""/>
          <div className={style.LightboxText}>
            <p>Description: {dataObj.description ? capitalize(dataObj.description) : "Unknown" }</p>

            <p>Date: {dataObj.created_at ? (new Date(dataObj.created_at)).toLocaleDateString() : "Unknown" }</p>

            { Object.keys(dataObj.exif).map( (key, i) => !!dataObj.exif[key] ? <p key={i}>{capitalize(key)} : {dataObj.exif[key]}</p> : null) }

            { Object.keys(dataObj.location).map( (key, index) => key != "position" && !!dataObj.location[key] ? <p key={index}>Location {key} : {dataObj.location[key]}</p> : null) }

            <p>Views: {dataObj.views || "Unknown"}</p>

            <p>Raw image: <a href={dataObj.urls.raw}>Link</a></p>

            <p>By: { dataObj.user.first_name && dataObj.user.links && dataObj.user.links.html ? <a href={dataObj.user.links.html}>{dataObj.user.first_name}</a> : "Unknown"}</p>
          </div>
        </div>
      </div> }
    </div>
  )
}

const Library = ({ getMoreImages, currentLayoutMode, gallery }) =>{

  React.useEffect(() => {
    console.log('=== Library.jsx ===');
    console.log('Gallery!: ', gallery);
  })

  const LibraryRef = React.useRef(null);

  const scrollHandler = () => {
    if(LibraryRef.current){
      const { scrollTop, scrollHeight, clientHeight } = LibraryRef.current;
      if( scrollTop + clientHeight === scrollHeight ){
        console.log('reached bottom');
        getMoreImages();
      }
    }
  }

  return (
    <div className={style.LibraryContainer}>
      <div className={style.LibraryContent} ref={LibraryRef} onScroll={()=>scrollHandler()}>
        {/* {
          processedData.map( (dataObj, i) => <Frame currentLayout={currentLayoutMode} dataObj={dataObj} key={dataObj.id}/>)
        } */}
        {Object.keys(gallery).map(key => <Frame currentLayout={currentLayoutMode} dataObj={gallery[key]} key={key} />) }
      </div>
    </div>
  );
}

export default Library;
