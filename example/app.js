import React from 'react';
import ReactDOM from 'react-dom';
import Visualisation from '../dist/index';
import mockData from './mockData';

var mount = document.getElementById('app');
ReactDOM.render(<Visualisation data={mockData} height={800} />, mount);
