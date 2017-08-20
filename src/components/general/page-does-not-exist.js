import React from 'react';
import NoPage from '../../imgs/404.gif';
import '../../styles/general/page-gifs.css';

function ErrorPage() {
  return <img src={NoPage} alt="" className="full-page-gifs" />;
}

export default ErrorPage;
