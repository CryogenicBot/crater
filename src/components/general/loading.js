import React from 'react';
import ErrorPage from './error-page';
import LoadingGif from '../../imgs/loading.gif';
import '../../styles/general/page-gifs.css';

function Loading({ isLoading, error }) {
  // handle the loading state
  if (isLoading) {
    return <img src={LoadingGif} alt="" className="full-page-gifs" />;
  } else if (error) {
    // handle the error state
    return <ErrorPage />;
  } else {
    return null;
  }
}

export default Loading;