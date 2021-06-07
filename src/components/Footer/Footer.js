import React from 'react'
import './Footer.css'

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
function Footer() {
    return (
        <div className="Footer-wrapper">
            <ul className="ssicons">
                <li className="icons">
                    <FaFacebook />
                </li>
                <li className="icons">
                    <FaLinkedin />
                </li>
                <li className="icons">
                    <FaInstagram />
                </li>
                <li className="icons">
                    <FaTwitter />
                </li>
            </ul>
            <p>NoCopyrights @2021 | website By Karthikeya</p>
        </div>
    )
}

export default Footer
