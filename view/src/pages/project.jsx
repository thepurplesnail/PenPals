import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useProjects } from '../api/api'

const Project = props => {
    const {id} = useParams()
    const project = useProjects()[id - 1]

    return(
        <div className = 'page'>
            <h1>{project.title}</h1>
            <h2>Documents:</h2>
            {project.documents.map(
                document => 
                <h3><Link to = {`document/${document.id}`}>{document.title}</Link></h3>
            )}
            
        </div>
    )
}

export default Project