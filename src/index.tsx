import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
