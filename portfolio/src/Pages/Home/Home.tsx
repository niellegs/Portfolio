import "./Home.css"

// COMPONENTS
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Hobbies from "../../Components/Hobbies/Hobbies";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Contact from "../../Components/Contact/Contact";

function Home() {
    return (
        <>
        <Header />
        <Hero />
        <AboutMe />
        <Hobbies />
        <Skills />
        <Portfolio />
        <Contact />
        </>
    )
}

export default Home;