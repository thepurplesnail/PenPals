import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { SidebarData } from './components/sidebar-data'
import './css/sidebar.css'
import { StyledLink, StyledCaret, StyledSidebarWrap, StyledClose } from './components/styling'

const Sidebar = props => {
    const [expanded, setExpanded] = useState(false);

    return(
        <StyledSidebarWrap showSidebar = {props.showSidebar}>
            <div className='close' onClick={props.onClick}><StyledClose/></div>
            {SidebarData.map((item, index) => 
                <StyledLink to = {item.path} key = {index}>
                    <div className='link-wrapper'>
                        {item.icon}
                        {item.title}
                        { item.subset &&
                        <div onClick = {() => setExpanded(!expanded)}>
                            <StyledCaret expanded = {expanded}/>
                        </div>
                        }
                    </div>
                </StyledLink>
            )}
        </StyledSidebarWrap>
    )
}

export default Sidebar;