import React, {useState} from "react";
import Project from "../Project/Project";
import "./Portfolio.css"

interface Portfolio {
    topic: string;
    title: string;
    description: string;
    src: string;
}

function Portfolio() {
    const topics: string[] = ["Front-End", "Back-End", "Mobile", "Outros"];
    const projects: Portfolio[] = [
        {topic: "Back-End", title: "Autenticação com JWT e OAuth", description: "API segura com login por e-mail/senha e autenticação via Google e GitHub.", src: "https://www.google.com.br/?hl=pt-BR"},
        {topic: "Front-End", title: "Shen Cuisine", description: "Site pessoal de receitas feito em PHP, CSS e JS", src: "https://www.google.com.br/?hl=pt-BR"}
    ];

    const [selectedTopic, setSelectedTopic] = useState<string>("All"); 

    const filteredProjects = selectedTopic === "All" ? projects :projects.filter((p) => p.topic === selectedTopic);
    
    return (
        <div className="portfolio_classname">
            <h2>Portfolio</h2>
            <div className="portfolio_menu">
                {topics.map((topic) => (
                    <button key={topic} onClick={() => setSelectedTopic(topic)}>
                        {topic}
                    </button>
                ))}
            </div>
            <div className="project_list display-flex align-center space-evenly">
                {filteredProjects.map((project) => (
                     <Project key={project.title} title={project.title} description={project.description} src={project.src}/>
                ))}
            </div>
        </div>
        
    )
}

export default Portfolio;