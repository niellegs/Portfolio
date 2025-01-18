import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 100; // Corrigido o nome
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header display-flex space-between position-fixed align-center ${scrolled ? "scrolled" : ""}`}>
            <img src={Logo} alt="logo" />
            <ul className="display-flex">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;
