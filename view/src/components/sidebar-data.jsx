import React from 'react'
import { StyledHome, StyledProject} from './styling'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <StyledHome/>
    }, 
    {
        title: 'Projects',
        path: 'projects',
        icon: <StyledProject/>,
        subset:[
            {
                title: 'Project 1',
                path: 'project_1',
                subset: [
                    {
                        title: 'Document 1',
                        path: 'project_1/document_1'
                    }
                ]
            }
        ]
    }
]