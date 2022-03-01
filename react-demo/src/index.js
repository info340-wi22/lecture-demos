import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; //include css

import App from './components/App';

//show the content in the web page (inside #root)
ReactDOM.render(<App />, document.getElementById('root'));