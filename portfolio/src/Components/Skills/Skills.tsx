import React, { useState } from "react";
import "./Skills.css";

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
        { topic: "Front-End", skill: "Javascript", description: "(às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser", percentage: 70, src: "fa-brands fa-js" }
    ];

    const [selectedTopic, setsSelectedTopic] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null); // Novo estado para a skill selecionada

    const handleSkillClick = (topic: string) => {
        setsSelectedTopic(topic === selectedTopic ? null : topic);
        setSelectedSkill(null); // Limpa a skill selecionada ao mudar de tópico
    };

    const handleSkillSelect = (skill: Skill) => {
        setSelectedSkill(skill); // Atualiza a skill selecionada
    };

    return (
        <div className="skill_container">

            <div className="skill_menu">
                {topics.map((topic) => (
                    <button key={topic} onClick={() => handleSkillClick(topic)}>
                        {topic}
                    </button>
                ))}
            </div>

            <div className="skill_list display-flex">
                {/* Exibe informações da skill selecionada */}
                {selectedSkill && (
                    <div className="skill_info">
                        <h2 className="title">{selectedSkill.skill}</h2>
                        <p>{selectedSkill.description}</p>
                        <p className="display-flex">
                            {selectedSkill.percentage}% 
                            <div className="percentage" style={{ width: `${selectedSkill.percentage}%` }}></div>
                        </p>
                    </div>
                )}

                {selectedTopic && (
                    <ul className="display-flex">
                        {skills
                            .filter((skill) => skill.topic === selectedTopic)
                            .map((skill) => (
                                <li 
                                    className={skill.skill} 
                                    key={skill.skill} 
                                    onClick={() => handleSkillSelect(skill)} // Atualiza a skill selecionada ao clicar
                                >
                                    <i className={skill.src}></i>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Skills;
