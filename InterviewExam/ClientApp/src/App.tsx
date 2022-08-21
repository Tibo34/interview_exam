import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home/Home";
import {  AuthenticatedTemplate, UnauthenticatedTemplate,   } from "@azure/msal-react";
import NotAuthenticate from "./components/NotAuthenticate/NotAuthenticate";

export default class App extends Component {
    render() {
       
      return (
          <>                     
           <AuthenticatedTemplate>
                  <Route exact path="/" component={Home} />
          </AuthenticatedTemplate>
           <UnauthenticatedTemplate>
                  <NotAuthenticate/>                 
           </UnauthenticatedTemplate>
          
      </>);
  }
}
