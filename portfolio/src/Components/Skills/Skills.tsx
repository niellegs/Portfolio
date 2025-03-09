import { useState } from "react";
import "./Skills.css";
import SideTitle from "../SideTitle/SideTitle";

function Skills() {
    const topics: string[] = ["Front-End", "Back-End", "Mobile", "Outros"];

    interface Skill {
        topic: string;
        skill: string;
        description: string;
        percentage: number;
        src: string;
    }

    const skills: Skill[] = [
        { topic: "Front-End", skill: "HTML", description: "HTML é uma linguagem utilizada para dar corpo às páginas web.", percentage: 90, src: "fa-brands fa-html5" },
        { topic: "Front-End", skill: "CSS", description: "Cascading Style Sheets é um mecanismo para adicionar estilos (cores, fontes, espaçamento, etc.) a uma página web.", percentage: 90, src: "fa-brands fa-css3" },
        { topic: "Front-End", skill: "Javascript", description: "(às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser", percentage: 70, src: "fa-brands fa-js" },
        { topic: "Front-End", skill: "React.js", description: "React é um framework Javascript criado pela Meta que é usado para criar UI em aplicativos web.", percentage: 30, src:"fa-brands fa-react"},
        {topic: "Mobile", skill: "React Native", description: "React Native é uma estrutura de aplicativo móvel popular, baseada em javascript, que permite criar aplicativos móveis renderizados nativamente para iOS e Android." ,percentage: 20, src:"fa-brands fa-react"},

    ];

    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const handleSkillClick = (topic: string) => {
        setSelectedTopic(topic === selectedTopic ? null : topic);
        setSelectedSkill(null);
    };

    const handleSkillSelect = (skill: Skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="skill_container">
            <SideTitle text="Skills" side="left" className="teste"/>
            <div className="skill_menu">
                {topics.map((topic) => (
                    <button key={topic} onClick={() => handleSkillClick(topic)}>
                        {topic}
                    </button>
                ))}
            </div>

            <div className="skill_list display-flex justify-center">
                <div className="skill_info">
                    {selectedSkill ? (
                        <>
                            <h2 className="title">{selectedSkill.skill}</h2>
                            <p>{selectedSkill.description}</p>
                            <p className="display-flex">
                                {selectedSkill.percentage}%
                                <div className="percentage" style={{ width: `${selectedSkill.percentage}%` }}></div>
                            </p>
                        </>
                    ) : (
                        <p>Selecione uma habilidade para ver os detalhes</p>
                    )}
                </div>

                <ul className="display-flex skill">
                    {skills
                        .filter((skill) => selectedTopic ? skill.topic === selectedTopic : true)
                        .map((skill) => (
                            <li 
                                className={skill.skill} 
                                key={skill.skill} 
                                onClick={() => handleSkillSelect(skill)}
                            >
                                <i className={skill.src}></i>
                            </li>
                        ))}
                </ul>
            </div>
            
        </div>
    );
}

export default Skills;
