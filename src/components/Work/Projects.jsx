import React from 'react';
import { projectsData } from './Data';
import WorkItem from './WorkItem';

const Projects = () => {
    return(
        <div>
            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorkItem  item= {item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Projects