import React, {useState, useEffect} from 'react'
import './styling/sidebar.css'
import { StyledSidebarWrap, StyledClose, StyledHome, StyledProject, StyledDocument } from './styling/styling'
import SidebarLink from './components/sidebar-link'
import { useProjects } from './api/api'

const Sidebar = props => {

    const [expandProjects, setExpandProjects] = useState()
    const [expandDocuments, setExpandDocuments] = useState({})

    const projects = useProjects()

    const renderProjects = () => {
        if (expandProjects){
            return(
                projects.map((project, index) => {
                    return(
                    <>
                        <SidebarLink
                            title = {project.title}
                            path = {`project/${project.id}`}
                            subset = {project.documents}
                            changeExpanded = {() => {
                                setExpandDocuments({...expandDocuments, [index]: !expandDocuments[index]})
                            }}
                            expanded = {expandDocuments[index]}
                        />
                        {renderDocuments(project, project.documents, index)}
                    </>
                    )
                })
            )
        }
    }
    const renderDocuments = (project, documents, index) => {
        if (expandDocuments[index]){
            return(
                documents.map(document => 
                <SidebarLink
                    title = {document.title}
                    path = {`project/${project.id}/document/${document.id}`}
                    icon = {<StyledDocument/>}
                    depth = '1'
                />)
            )
        }
    }
    
    return(
        <StyledSidebarWrap showSidebar = {props.showSidebar}>
            <div className='close' onClick={props.onClick}><StyledClose/></div>
            <SidebarLink 
                title = 'Home'
                path = '/'
                icon = {<StyledHome/>}
            />
            <SidebarLink
                title = 'Projects'
                path = 'projects'
                icon = {<StyledProject/>}
                subset = {projects}
                changeExpanded = {() => {setExpandProjects(!expandProjects)}}
                expanded = {expandProjects}
            />
            {renderProjects()}
        </StyledSidebarWrap>
    )
}

export default Sidebar;