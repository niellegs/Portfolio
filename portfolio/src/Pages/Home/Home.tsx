import "./Home.css"

// COMPONENTS
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Hobbies from "../../Components/Hobbies/Hobbies";

function Home() {
    return (
        <>
        <Header />
        <Hero />
        <AboutMe />
        <Hobbies />
        </>
    )
}

export default Home;