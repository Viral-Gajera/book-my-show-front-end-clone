import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="/book-my-show-front-end-clone/" >
        <App />
    </BrowserRouter>
);
