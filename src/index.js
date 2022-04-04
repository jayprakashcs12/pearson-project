import React from 'react';
import {createRoot} from "react-dom/client";
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

createRoot(document.getElementById('root')).render(<Router><App /></Router>);