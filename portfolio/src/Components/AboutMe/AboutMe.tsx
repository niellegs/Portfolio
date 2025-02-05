import "./AboutMe.css";
import { useEffect } from "react";
import SideTitle from "../SideTitle/SideTitle";

function AboutMe() {
    useEffect(() => {
        const handleScroll = () => {
            const aboutMeSection = document.querySelector('.container_aboutme') as HTMLElement;
            
            const scrollPosition = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container_aboutme display-flex justify-center align-center">
            <SideTitle text="Sobre Mim" side="right" />
            <div className="display-flex align-center justify-center">
                <div className="aboutme_photo">
                    {/* Sua foto aqui */}
                </div>
                <div className="aboutme_text">
                    <div className="aboutme_title">
                        <p>_whois</p>
                        <h2 className="title">Danielle Gomes</h2>
                        <p>Desenvolvedora Full-Stack</p>
                    </div>
                    <p>Atualmente sendo uma estudante viciada em cafeína e livros, procuro desenvolver sites de alta qualidade concentrados em equilibrar beleza e usabilidade. </p>
                    <button>
                        <a href="https://br.fiverr.com/ughhlynx?public_mode=true" target="_blank">Fiverr</a>
                    </button>
                    <button>
                        <a href="#">99jobs</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
