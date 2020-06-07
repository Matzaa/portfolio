import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <div id="navbar">
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
            >
                {" "}
                projects{" "}
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
            >
                {" "}
                contact{" "}
            </Link>
        </div>
    );
}
