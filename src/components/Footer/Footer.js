import React from 'react'
import './Footer.css'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className="Footer-wrapper">
            <ul className="ssicons">
                <li className="icons">
                    <a href="https://www.linkedin.com/in/mkarthikeya/">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="icons">
                    <a href="https://www.instagram.com/karthik_bht/">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p>NoCopyrights @2021 | website By Karthikeya</p>
        </div>
    )
}

export default Footer
