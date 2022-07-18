import React from 'react'
import { Link } from 'react-router-dom';
import { useProjects } from '../api/api';

const Projects = props => {
    const projects = useProjects()

    return(
        <div className='page'>
            <h1>Projects:</h1>
            {
                projects.map(project => 
                    <h3>
                        <Link to = {`/project/${project.id}`}>{project.title}</Link>
                    </h3>
                )
            }
            
        </div>
    )
}

export default Projects;