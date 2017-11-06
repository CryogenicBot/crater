import * as React from 'react';
const NoPage = require('../../imgs/404.gif');
import '../../styles/general/page-gifs.css';

class ErrorPage extends React.Component {
  render() {
    return <img src={NoPage} alt="" className="full-page-gifs" />;
  }
}

export default ErrorPage;
