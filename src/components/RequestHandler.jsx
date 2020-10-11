import React from 'react';

const RequestHandler = ({ rawImagesStoreHandler }) => {

  const fetchData = async () => {
    try {
      console.log('fetchData function');
      const fetchRequest = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
      const rawResult = await fetchRequest.json();
      console.log('rawResult: ', rawResult);
      rawImagesStoreHandler(rawResult);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  React.useEffect(() => {
    console.log('=== RequestHandler.jsx ===');
    // console.log(process.env.UNSPLASH_ACCESS_KEY);
    // console.log(process.env.UNSPLASH_SECRET_KEY);
    fetchData();
  }, []);
  return null;
};

export default RequestHandler;
