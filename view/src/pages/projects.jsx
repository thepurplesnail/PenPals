import React from 'react'
import { Outlet, Link, Navigate} from 'react-router-dom';

const Projects = props => {
    return(
        <div className='page'>
            <div>Projects:</div>
            <Link to = '/project'>Project</Link>
        </div>
    )
}

export default Projects;