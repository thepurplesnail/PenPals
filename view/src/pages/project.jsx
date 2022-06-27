import React from 'react'
import {Link} from 'react-router-dom'

const Project = props => {
    return(
        <div className = 'page'>
            <div>Project 1:</div>
            <p>Documents:</p>
            <Link to = 'document'>Document</Link>
        </div>
    )
}

export default Project