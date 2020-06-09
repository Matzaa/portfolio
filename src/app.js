/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Portfolio from "./portfolio";
import Contact from "./contact";
import * as Scroll from "react-scroll";

export default function App() {
    return (
        <div id="app">
            <div id="main-page">
                <h1>
                    Hi I'm Matzaa <br></br>
                    <br></br>
                    full stack web developer <br></br>
                    <br></br>
                    welcome to my portfolio
                </h1>
                <div id="arrow-container">
                    <h1>⇩</h1>
                </div>
            </div>
            <Portfolio activeClass="active" />
            <Contact activeClass="active" />
        </div>
    );
}
