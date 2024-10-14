import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import './assets/styles/globals.style.css'
const container = document.getElementById("root");
import { store } from "./utils/store/store";
import { Provider } from "react-redux";
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);