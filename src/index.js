import React from "react";
import ReactDOM from 'react-dom';

import App from "./App.tsx";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);