import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";




const publicClientApplication = new PublicClientApplication(msalConfig);
ReactDOM.render( 
    <BrowserRouter>
        <MsalProvider instance={publicClientApplication}>
            <App />
        </ MsalProvider>
     </BrowserRouter>,
  document.getElementById("root")
);
