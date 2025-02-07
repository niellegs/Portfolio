import "./Home.css"

// COMPONENTS
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Hobbies from "../../Components/Hobbies/Hobbies";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import ColorfullLine from "../../Components/ColorfulLine/ColorfullLine";

function Home() {
    return (
        <>
        <Header />
        <Hero />
        <AboutMe />
        <Hobbies />
        <Skills />
        <ColorfullLine />
        <Portfolio />
        <ColorfullLine />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;