import { Link } from "react-router-dom";
import "./Hero.css";

// COMPONENTS
import SideTitle from "../SideTitle/SideTitle";
import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const background = document.querySelector('.container-hero') as HTMLElement;
            const content = document.querySelector('.hero-content') as HTMLElement;
            const scrollPosition = window.scrollY;

            if (background && content) {
                // Aplica o efeito parallax no fundo, movendo o fundo a 50% da velocidade de rolagem
                background.style.transform = `translateY(${scrollPosition * 0.5}px)`;

                // Aplica um movimento mais rápido no conteúdo, movendo o conteúdo a 20% da velocidade de rolagem
                content.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-hero display-flex align-center justify-center primary-color">
            <div className="container-content">
                <div className="container-social display-flex direction-column">
                    <a href="https://www.linkedin.com/in/elle-gs/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/niellegs" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>

            <SideTitle text="Me Siga" side="left" />
            <div className="container-info display-flex direction-column justify-center align-center hero-content">
                <h1 className="title">Olá, mundo!</h1>
                <p>(.n) o dev que habita em mim saúda o dev que habita em você.</p>
                <div className="display-flex space-evenly">
                    <button className="primary-button">
                        <a href="#" download="meu-curriculo.pdf">Baixar CV</a>
                    </button>
                    <button><Link to="/blog">Blog</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
