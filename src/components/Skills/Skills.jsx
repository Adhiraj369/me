import React from 'react';
import "./Skills.css";
import Technical from './Technical';
import ExtraCurricular from './ExtraCurricular';

const Skills = () => {
    return(
        <section className="skills section" id="skill">
            <h2 className="section__title">My Skills</h2>
            <span className="section__subtitle">
            </span>

            <div className="skills__container container grid">
            <Technical />
            <ExtraCurricular />
            </div>
        </section>
    )
}

export default Skills