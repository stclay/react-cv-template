import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data/sidebar';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><CV {...Data} /></BrowserRouter>, global.document.getElementById('root'));
