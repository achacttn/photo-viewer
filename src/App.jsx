import { hot } from 'react-hot-loader';
import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Wrapper from './Layout/Wrapper';
import style from './App.module.css';
import RequestHandler from './components/RequestHandler';
import Header from './components/Header';
import Library from './components/Library';
import About from './components/About';

const App = () => {
  const [processedImagesState, setProcessedImagesState] = React.useState([]);
  const [rawImagesState, setRawImagesState] = React.useState([]);

  React.useEffect(()=>{
    let batch = [];
    for( let i=0; i<rawImagesState.length; i++ ){
      let { alt_description, created_at, description, exif, id, location, urls, views } = rawImagesState[i];
      let relData = { alt_description, created_at, description, exif, id, location, urls, views };
      batch.push(relData);
    }
    setProcessedImagesState(batch);
  }, [rawImagesState]);

  return (
    <BrowserRouter>
      <Wrapper>
        <div className={style.AppContainer}>
          <RequestHandler rawImagesStoreHandler={setRawImagesState} />
          <div className={style.AppContent}>
            <div className={style.HeaderContainer}>
              <Header />
            </div>
            <div className={style.PageContainer}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Library processedData={processedImagesState}/>
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
