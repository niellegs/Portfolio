import {useState} from "react";
import "./Portfolio.css"
import onProgress from "../../assets/on_progress.gif";

// COMPONENTS
import Project from "../Project/Project";
import SideTitle from "../SideTitle/SideTitle";

interface Portfolio {
    img: string; // Adicionei esta linha
    topic: string;
    title: string;
    description: string;
    src: string;
}


function Portfolio() {
    const topics: string[] = ["Front-End", "Back-End", "Mobile", "Outros"];
    const projects: Portfolio[] = [
        {img: onProgress, topic: "Mobile",title: "Summit", description: "Aplicação multi plataforma focada no gerenciamento de equipes em ASP.NET e Reacr.", src: "#"},
        {img: onProgress, topic: "Front-End", title: "NoBackup", description: "Website que expõe vulnerabilidades com base na API do CVE (Common Vulnerabilities and Exposures).", src: "#"}
        
    ];

    const [selectedTopic, setSelectedTopic] = useState<string>("All"); 

    const filteredProjects = selectedTopic === "All" ? projects :projects.filter((p) => p.topic === selectedTopic);
    
    return (
        <div className="portfolio_classname" id="projects">
            <SideTitle text="Portfolio" side="right" className="portfolio_sidetitle"/>
            <div className="portfolio_menu">
                {topics.map((topic) => (
                    <button key={topic} onClick={() => setSelectedTopic(topic)}>
                        {topic}
                    </button>
                ))}
            </div>
            <div className="project_list display-flex align-center space-evenly">
                {filteredProjects.map((project) => (
                     <Project
                     key={project.title}
                     img={project.img}
                     title={project.title}
                     description={project.description}
                     src={project.src}
                 />
                 
                ))}
            </div>
        </div>
        
    )
}

export default Portfolio;