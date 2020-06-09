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
        this.setState({ url: "./imdb-sn-10fps.mp4" });
        this.setState({ modal: !this.state.modal });
    }
    setIB() {
        this.setState({ url: "./IB-10fps.mp4" });
        this.setState({ modal: !this.state.modal });
    }

    setSpoti() {
        this.setState({ url: "./spotify-10fps.mp4" });
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
                        <h3 className="project-title">Social Network</h3>

                        <p>
                            FilmBook is a single page application that allows
                            users to join a social network focusing on a love of
                            cinema. Users can
                            <ul>
                                <li> register and login</li>
                                <li>
                                    get email with secret code to reset
                                    forgotten password with AWS SES
                                </li>
                                <li>
                                    add and/or update profile picture and
                                    biography
                                </li>
                                <li>send and receive friend requests</li>
                                <li>
                                    add and remove favorite movies with the help
                                    of the Open Movie Database API
                                </li>
                                <li>
                                    comment and engage in conversation on each
                                    movie's page
                                </li>
                                <li>leave messages on eachother's wall</li>
                                <li>
                                    connect with others based on favorite movies
                                </li>
                            </ul>
                        </p>
                        <p>
                            Technologies: React.js, Redux, Socket.io,
                            JavaScript, AWS S3, PostgreSQL, Node.js
                        </p>
                        <p className="code">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Matzaa/imdb-social-network"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <p> see code!</p>
                        </p>
                    </div>
                    <a onClick={() => this.setSN()}>
                        <img src="./imdb-sn-screenshot.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3 className="project-title">Image Board</h3>
                        <p>
                            Pretty red things is a single page application
                            inspired by instagram. Users can
                            <ul>
                                <li>
                                    post pictures with a title and description
                                </li>
                                <li>
                                    comment on any of the pictures and see other
                                    comments
                                </li>
                                <li>infinite scroll</li>
                            </ul>
                        </p>
                        <p>
                            Technologies: Vue.js, JavaScript, Express, Node.js,
                            PostgreSQL, AWS S3{" "}
                        </p>
                        <p className="code">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Matzaa/imageboard"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <p> see code!</p>
                        </p>
                    </div>
                    <a onClick={() => this.setIB()}>
                        <img src="./imageBoard.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3 className="project-title">Petition</h3>
                        <p>
                            This project is an online petition where users can
                            register to sign a petition. Features:
                            <ul>
                                <li>register and login with hashed password</li>
                                <li>add personal signature on canvas</li>
                                <li>update profile information</li>
                                <li>
                                    see list of other signers, also sorted by
                                    city
                                </li>
                            </ul>
                        </p>
                        <p>
                            Technologies: Handlebars, JavaScript, Node.js,
                            Express, PostgreSQL, Cookie Session{" "}
                        </p>
                        <p className="code">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Matzaa/petition"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <p> see code!</p>
                        </p>
                        {/* <a
                            className="visit"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://neighborspetition.herokuapp.com/"
                        >
                            visit site!
                        </a> */}
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
                        <h3 className="project-title">Spotify Search</h3>
                        <p>
                            A page where you can search the spotify database
                            <ul>
                                <li>connects to the Spotify API</li>
                                <li>features infinite scroll</li>
                            </ul>
                        </p>
                        <p>Technologies: JavaScript, JQuery, AJAX </p>
                        <p className="code">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Matzaa/spotify-search"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <p> see code!</p>
                        </p>
                    </div>
                    <a onClick={() => this.setSpoti()}>
                        <img src="./spotify.png" />
                        <h3 className="hover-text">preview</h3>
                    </a>
                </div>
                <div className="project-container">
                    <div className="text">
                        <h3 className="project-title">Connect Four</h3>
                        <p>
                            An online version of the all-time favorite connect
                            four game where two players take turns dropping
                            their piece in one of the seven columns. The first
                            player to get four adjecent pieces horizontally,
                            vertically or diagonnaly wins the game.
                        </p>
                        <p>Technologies: JavaScript, JQuery </p>
                        <p className="code">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Matzaa/connect-four"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <p> see code!</p>
                        </p>
                        {/* <a
                            className="visit"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://matzaa.github.io/connect-four//"
                        >
                            visit site!
                        </a> */}
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
