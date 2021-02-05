import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Signin from "../containers/signin"
import Signup from "../containers/signup"



  export default function AppRouter(){
        return(
                <Router>
                    <Route exact path="/" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/user"></Route>
                    <Route path="/vendor"></Route>
                </Router>
        )
  }