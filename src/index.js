import React from "react";
import { render } from "react-dom";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import "bootstrap/dist/css/bootstrap.min.css";

render(
    <AboutPage />,
    document.getElementById('root')
);
