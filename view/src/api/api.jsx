import React, { useState, useEffect } from "react";

export const useProjects = () => 
    [
        {
            id: 1,
            title: 'This is my first project',
            documents: [
                {id: 1, title: 'A_document'},
                {id: 2, title: 'Another_document'}
            ]
        }, 
        {
            id: 2, 
            title: `And here's my second project`,
            documents: [
                {id: 3, title: 'Document 3'},
                {id: 4, title: 'Document 4'}
            ]
        }, 
        {
            id: 3, 
            title: 'Third project',
            documents: [
                {id: 5, title: 'Document 5'},
                {id: 6, title: 'Document 6'}
            ]
        }
    ]

export const useDocument = (documentId, projectId) => {
    const documents = useProjects()[projectId - 1].documents
    console.log(`documentId: ${documentId}`)
    for (let doc of documents){
        if (doc.id == documentId){
            return doc
        }
    }
}