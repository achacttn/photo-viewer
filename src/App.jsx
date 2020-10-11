import { hot } from 'react-hot-loader';
import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Wrapper from './Layout/Wrapper';
import style from './App.module.css';
import Header from './components/Header';
import Library from './components/Library';
import About from './components/About';

const App = () => {
  const [pictureLayoutState, setPictureLayoutState] = React.useState(0);
  const toggleLayout = () => {
    setPictureLayoutState(pictureLayoutState => (pictureLayoutState+1)%3)
  }

  const [gallery, setGallery] = React.useState({});
  // const [processedImagesState, setProcessedImagesState] = React.useState([]);
  // const [rawImagesState, setRawImagesState] = React.useState([]);

  const fetchAndStoreData = async () => {
    try {
      const fetchRequest = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
      const rawResult = await fetchRequest.json();
      console.log('rawResult: ', rawResult);
      let newGalleryBatch = {};
      for( let i=0; i<rawResult.length; i++ ){
        let { alt_description, created_at, description, exif, id, location, urls, views, user } = rawResult[i];
        if( !Object.keys(gallery).includes(id) ){
          newGalleryBatch[id] = { alt_description, created_at, description, exif, location, urls, views, user }
        }
      }
      setGallery(prevGallery => ({...prevGallery, ...newGalleryBatch}));
    } catch (error) {
      console.log('error: ', error);
    }
  };

  React.useEffect(() => {
    fetchAndStoreData();
  }, [])

  React.useEffect(() => {
    console.log('gallery entries: ', Object.keys(gallery).length);
  })

  // React.useEffect(() => {
  //   let currentIds = Object.keys(gallery);
  //   for( let i=0; i<rawImagesState.length; i++){
  //     if (!currentIds.includes(rawImagesState[i].id) ){
  //       let { alt_description, created_at, description, exif, id, location, urls, views, user } = rawImagesState[i];
  //       let newGalleryAddition = { alt_description, created_at, description, exif, location, urls, views, user };
  //       setGallery(prevGallery => ({...prevGallery, id: newGalleryAddition}));
  //     }
  //   }
  // }, [rawImagesState])

  // React.useEffect(()=>{
  //   let batch = [];
  //   for( let i=0; i<rawImagesState.length; i++ ){
  //     let { alt_description, created_at, description, exif, id, location, urls, views, user } = rawImagesState[i];
  //     let relData = { alt_description, created_at, description, exif, id, location, urls, views, user };
  //     batch.push(relData);
  //   }
  //   setProcessedImagesState(batch);
  // }, [rawImagesState]);

  return (
    <BrowserRouter>
      <Wrapper>
        <div className={style.AppContainer}>
          {/* <RequestHandler rawImagesStoreHandler={setRawImagesState} /> */}
          <div className={style.AppContent}>
            <div className={style.HeaderContainer}>
              <Header currentLayoutMode={pictureLayoutState} toggleLayout={toggleLayout}/>
            </div>
            <div className={style.PageContainer}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Library currentLayoutMode={pictureLayoutState} gallery={gallery} getMoreImages={fetchAndStoreData}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Wrapper>
    </BrowserRouter>
)
};

export default hot(module)(App);
