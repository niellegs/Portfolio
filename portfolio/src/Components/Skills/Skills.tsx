import React, { useState } from "react";
import "./Skills.css";

function Skills() {
    const topics: string[] = ["Front-End", "Back-End", "Mobile", "Outros"];
    interface Skill {
        topic: string;
        skill: string;
        description: string;
        percentage: number;
    }
    const skills: Skill[] = [
        {topic: "Front-End", skill:"HTML", description:"HTML é uma linguagem utilizada para dar corpo às páginas web.", percentage: 90},
        {topic: "Front-End", skill:"CSS", description:"Cascading Style Sheets é um mecanismo para adicionar estilos (cores, fontes, espaçamento, etc.) a uma página web.", percentage: 90}
    ];

    const [selectedTopic, setsSelectedTopic] = useState<string | null>(null);

    const handleSkillClick = (topic: string) => {
        setsSelectedTopic(topic === selectedTopic ? null : topic ); 
    }



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
                {selectedTopic && (
                    <ul>
                        { skills 
                            .filter((skill) => skill.topic === selectedTopic)
                            .map((skill) => (
                                <li className={ skill.skill } key={(skill.skill)}>{skill.skill}</li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Skills;