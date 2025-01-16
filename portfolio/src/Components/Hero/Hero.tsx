import { Link } from "react-router"
import "./Hero.css"

// COMPONENTS
import SideTitle from "../SideTitle/SideTitle";

// IMAGES
import LinkedinLogo from "../../assets/linkedin.svg"
import GithubLogo from "../../assets/github.svg"

function Hero() {
    return (
        <div className="container-hero display-flex align-center justify-center primary-color">
            <div className="container-social display-flex direction-column">
                <a href="#">
                    <img className="media-logo" src={ LinkedinLogo } alt="" />
                </a>
                <a href="#">
                    <img className="media-logo" src={ GithubLogo } alt="" />
                </a>
            </div>
            
            
            <SideTitle text="Me Siga" side="left"/>
            <div className="container-info display-flex direction-column justify-center align-center">
                <h1 className="title">Olá, mundo!</h1>
                <p>(.n) o dev que habita em mim saúda o dev que habita em você.</p>
                <div className="display-flex space-evenly">
                <button className="primary-button"><a href="#" download="meu-curriculo.pdf">Baixar CV</a></button>
                <button><Link to="/blog">Blog</Link></button>
                </div>

            </div>
            
        </div>
    )
}

export default Hero;