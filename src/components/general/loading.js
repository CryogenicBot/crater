import React from 'react';
import ErrorPage from './error-page';
import loadingGif from '../../imgs/loading.gif';
import '../../styles/general/page-gifs.css';

const Loading = ({ isLoading, error }) => {
  // handle the loading state
  if (isLoading) {
    return <img src={loadingGif} alt="" className="FullPageGifs" />;
  } else if (error) {
    // handle the error state
    return <ErrorPage />;
  } else {
    return null;
  }
};

export default Loading;
