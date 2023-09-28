"use client"

import { useState } from 'react';
const Footer = () => { 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen((prev)=> !prev);
}



    return (
        <footer className="py-10 text-center">

<button
            className={`w-hamburger ${isMenuOpen ? 'w-hamburger--open' : ''}`}
            onClick={toggleMenu}
            style={{display: 'block'}}
        >
            <span className="w-hamburger-box">
                <span className="w-hamburger-inner"></span>
            </span>
        </button>
            All rights reserved. 

        </footer>
    )
    }

export default Footer