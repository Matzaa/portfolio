/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./navbar";
import Modal from "./modal";

export default class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = { url: "", modal: false };
    }

    componentDidMount() {
        console.log("portfolio mounted");
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
        console.log("modal toggle");
        console.log("this state:", this.state);
    }

    setSN() {
        this.setState({ url: "./imdb-sn.mov" });
        this.setState({ modal: !this.state.modal });
    }
    setIB() {
        this.setState({ url: "./ib-preview" });
        this.setState({ modal: !this.state.modal });
    }

    setSpoti() {
        this.setState({ url: "./spotify.mov" });
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div id="portfolio">
                <Navbar />

                {this.state.modal && (
                    <Modal
                        url={this.state.url}
                        modal={this.modal}
                        hide={() => this.toggle()}
                    />
                )}

                <div className="project-container">
                    <div className="text">
                        <h3>Social Network</h3>

                        <p>
                            FilmBook is a single page application that allows
                            users to join a social network focusing on a love of
                            cinema. Users can register, add and update their
                            profile picture and biography, send and receive
                            friend requests, add and remove their favorite
                            movies with the help of the Open Movie Database API,
                            comment on movies, leave messages on eachother's
                            wall, connect with others based on liked movies.
                        </p>
                        <p>
                            Technologies: React.js, Redux, Socket.io,
                            JavaScript, AWS S3, PostgreSQL, Node.js
                        </p>
                    </div>
                    <a onClick={() => this.setSN()}>
                        <img src="./imdb-sn-screenshot.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3>Image Board</h3>
                        <p>
                            Pretty red things is a single page application
                            inspired by instagram, where anyone can post a
                            picture with a title and description, as well as
                            comment on any of the pictures.
                        </p>
                        <p>
                            Technologies: Vue.js, JavaScript, Node.js,
                            PostgreSQL, AWS S3{" "}
                        </p>
                    </div>
                    <a onClick={() => this.setIB()}>
                        <img src="./imageBoard.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3>Petition</h3>
                        <p>
                            This project is an online petition where users can
                            register to sign a petition. Some features include
                            adding signature on canvas, updating profile
                            information, login with password, list of other
                            signers sorted by city.
                        </p>
                        <p>
                            Technologies: Handlebars, JavaScript, Node.js,
                            Express, PostgreSQL, Cookie Session{" "}
                        </p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://neighborspetition.herokuapp.com/"
                        >
                            visit site!
                        </a>
                        <p>
                            see code <i className="fab fa-github"></i>
                        </p>
                    </div>

                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://neighborspetition.herokuapp.com/"
                    >
                        <img src="./petition.png" />
                        <h3 className="hover-text">visit</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3>Spotify Search</h3>
                        <p>
                            A page where you can search the spotify database
                            through its API, featuring infinite scroll.
                        </p>
                        <p>Technologies: JavaScript, JQuery, AJAX </p>
                    </div>
                    <a onClick={() => this.setSpoti()}>
                        <img src="./spotify.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3>Connect Four</h3>
                        <p>
                            An online version of the all-time favorite connect
                            four game where two players take turns dropping
                            their piece in one of the seven columns. The first
                            player to get four adjecent pieces horizontally,
                            vertically or diagonnaly wins the game.
                        </p>
                        <p>Technologies: JavaScript, JQuery </p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://matzaa.github.io/connect-four/"
                        >
                            visit site!
                        </a>
                    </div>

                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://matzaa.github.io/connect-four/"
                    >
                        <img src="./connect4.png" />
                        <h3 className="hover-text">visit</h3>
                    </a>
                </div>
            </div>
        );
    }
}
