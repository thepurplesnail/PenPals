import React, {useEffect} from 'react'
import { useDocument } from '../api/api'
import { useParams } from 'react-router-dom'

const Document = props => {
    const {documentId, projectId} = useParams()
    const document = useDocument(documentId, projectId)
    useDocument(documentId, projectId)
    return(
        <div className='page'>
            <h1>{document.title}</h1>
            <h3>Text editor</h3>
        </div>
    )
}

export default Document