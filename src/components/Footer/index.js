import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';


function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <p>Created by Kyle Richnafsky</p>

                <div className="link-div">
                    <a href="https://github.com/7krich">
                        <AiFillGithub></AiFillGithub>
                    </a>
                </div>

                <div className="link-div">
                    <a href="https://www.linkedin.com/in/kyle-richnafsky-793715122/">
                        <BsLinkedin></BsLinkedin>
                    </a>
                </div>

                <div className="link-div">
                    <a href="https://www.instagram.com/k_rich4/?hl=en">
                        <AiFillInstagram></AiFillInstagram>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;