import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </BrowserRouter>
);
