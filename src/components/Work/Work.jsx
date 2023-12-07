import React from 'react';
import "./Work.css";
import Projects from './Projects';
const Work = () => {
    return(
        <section className="work section" id='projects'>
            <h2 className="section__title">Project Work</h2>
            <span className="section__subtitle"></span>

            <Projects />
        </section>
    )
}

export default Work