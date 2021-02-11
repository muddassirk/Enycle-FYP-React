import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import url from "../secrets/index";
import "./css/app.css";
import './css/line-awesome.css'
import './css/style.css'
import './css/responsive.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/line-awesome-font-awesome.min.css'
import './css/jquery.mCustomScrollbar.min.css'
import './css/flatpickr.min.css'






import home from "./images/icon1.png";
import companies from "./images/icon2.png";
import projects from "./images/icon3.png";
import profile from "./images/icon4.png";



export default function UserDashboard() {

    // var [loggedOut, setLogout] = useState(true);
    // console.log("url is = > " , url);

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: url + "/profile",
    //     }).then((response) => {
    //             // setLogout(false);
    //             console.log("user details are = > " ,response.data);
    //     }, (error) => {



    //     });
    // } , [] );



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
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
                <button onClick={logout}>
                    Logout
                </button>
            </nav> */}
            {/* {
                loggedOut ? <Redirect to="/" /> : ""
            } */}




            <div className="wrapper">
                <header>
                    <div className="container">
                        <div className="header-data">
                            <div className="logo">
                                <a href="#" title=""><img src="" alt="" /></a>
                            </div>

                            <nav>
                                <ul>
                                    <li>
                                        <a href="#" title="">
                                            <span><img src={home} alt="" /></span>
                                    Home
                                </a>
                                    </li>
                                    <li>
                                        <a href="companies.html" title="">
                                            <span><img src={companies} alt="" /></span>
                                    Companies
                                </a>
                                        <ul>
                                            <li><a href="companies.html" title="">Companies</a></li>
                                            <li><a href="company-profile.html" title="">Company Profile</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="projects.html" title="">
                                            <span><img src={projects} alt="" /></span>
                                    Projects
                                </a>
                                    </li>
                                    <li>
                                        <a href="profiles.html" title="">
                                            <span><img src={profile} alt="" /></span>
                                    Profiles
                                </a>

                                    </li>
                                    <li>

                                        <a href="#" title="">
                                            <span><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                                    Logout
                                </a>
                                    </li>



                                </ul>
                            </nav>
                            <div className="menu-btn">
                                <a href="#" title=""><i className="fa fa-bars"></i></a>
                                {/* <a href="#" title="">Menu <i className="fa fa-long-arrow-left"></i></a> */}
                            </div>

                        </div>
                    </div>
                </header>







                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">
                                            <div className="user-data full-width">
                                                <div className="user-profile">
                                                    <div className="username-dt">
                                                        <div className="usr-pic">
                                                        </div>
                                                    </div>
                                                    <div className="user-specs">
                                                        <h3>User Name</h3>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <div className="tags-sec full-width">
                                                <ul>
                                                    <li><a href="#" title="">Help Center</a></li>
                                                    <li><a href="#" title="">About</a></li>
                                                    <li><a href="#" title="">Privacy Policy</a></li>
                                                    <li><a href="#" title="">Community Guidelines</a></li>
                                                    <li><a href="#" title="">Cookies Policy</a></li>
                                                    <li><a href="#" title="">Career</a></li>
                                                    <li><a href="#" title="">Language</a></li>
                                                    <li><a href="#" title="">Copyright Policy</a></li>
                                                </ul>
                                                <div className="cp-sec">
                                                    <img src="images/logo2.png" alt="" />
                                                    <p><img src="images/cp.png" alt="" />Copyright 2021</p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="main-ws-sec">
                                            <div className="post-topbar">
                                                {/* <div className="user-picy">
                                            <img src="images/resources/user-pic.png" alt="" />
                                        </div> */}
                                                <div className="post-st">
                                                    <ul>
                                                        <li><a className="post_project" href="#" title="">Post a Item Name</a></li>
                                                        <li><a className="post-jb active" href="#" title="">Post Weight</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="posts-section">
                                                <div className="post-bar">

                                                </div>



                                                
                                                
                                                 {/* Loding Logo */}
                                                <div className="process-comm">
                                                    <div className="spinner">
                                                        <div className="bounce1"></div>
                                                        <div className="bounce2"></div>
                                                        <div className="bounce3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pd-right-none no-pd">
                                        <div className="right-sidebar">
                                            <div className="widget widget-about">
                                                <img src="images/wd-logo.png" alt="" />
                                                <h3>Track Time on KHTA</h3>
                                                <span>Pay only for the Hours worked</span>
                                                <div className="sign_link">
                                                    <h3><a href="sign-in.html" title="">Sign up</a></h3>
                                                    <a href="#" title="">Learn More</a>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="tags-sec full-width">
                                                <ul>
                                                    <li><a href="#" title="">Help Center</a></li>
                                                    <li><a href="#" title="">About</a></li>
                                                    <li><a href="#" title="">Privacy Policy</a></li>
                                                    <li><a href="#" title="">Community Guidelines</a></li>
                                                    <li><a href="#" title="">Cookies Policy</a></li>
                                                    <li><a href="#" title="">Career</a></li>
                                                    <li><a href="#" title="">Language</a></li>
                                                    <li><a href="#" title="">Copyright Policy</a></li>
                                                </ul>
                                                <div className="cp-sec">
                                                    <img src="images/logo2.png" alt="" />
                                                    <p><img src="images/cp.png" alt="" />Copyright 2021</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>









        </div>
    )
}