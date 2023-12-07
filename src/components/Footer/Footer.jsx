import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
       <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Adhiraj Singh</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/adhiraj.singh_/" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>
        </a>

        <a href="https://github.com/Adhiraj369" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/adhiraj-singh-a79aa9228/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
        </a>

            </div>
            <span className="footer__copy">&#169; Adhiraj Singh 2023 All rights reserved</span>
        </div>
       </footer>
    )
}

export default Footer 