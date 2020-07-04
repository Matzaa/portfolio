import React from "react";

export default function Contact() {
    return (
        <div id="contact">
            <div id="contact-container">
                <h3 className="project-title">Contact me</h3>
                <div id="links">
                    <a
                        href="mailto:matzaa@matzaawahorn.com"
                        target="_self"
                        data-content="matzaa@matzaawahorn.com"
                        data-type="mail"
                    >
                        <i className="far fa-paper-plane"></i>
                        {/* <p className="mail">matzaa@matzaawahorn.com</p> */}
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Matzaa"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/matzaa-wahorn-131312a7"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
