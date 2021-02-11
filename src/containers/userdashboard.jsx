import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import url from "../secrets/index";

export default function UserDashboard() {

    // var [loggedOut, setLogout] = useState(true);
    // console.log("url is = > " , url);

    useEffect(() => {
        axios({
            method: 'get',
            url: url + "/profile",
        }).then((response) => {
                // setLogout(false);
                console.log("user details are = > " ,response.data);
        }, (error) => {
     
     
         
        });
    } , [] );



    // function logout() {

    //     axios({
    //         method: 'post',
    //         url: url + "/auth/logout",

    //     }).then((response) => {
    //         alert(response.data.message);
    //         setLogout(true);

    //     }, (error) => {
    //         alert(error.response.data.message);
    //     })
    // }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
                    </div>
                </div>
                {/* <button onClick={logout}>
                    Logout
                </button> */}
            </nav>
            {/* {
                loggedOut ? <Redirect to="/" /> : ""
            } */}
        </div>
    )
}