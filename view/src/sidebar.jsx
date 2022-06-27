import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { SidebarData } from './components/sidebar-data'
import './css/sidebar.css'
import { StyledLink } from './components/styling'

const Sidebar = props => {
        
    return(
        <div className='sidebar'>
            <ul>
                {SidebarData.map((item, index) => 
                    
                    <li key = {index}>
                        <StyledLink to = {item.path}>
                            <div className='link-wrapper'>
                                {item.icon}
                                {item.title}
                            </div>
                        </StyledLink>
                    </li>
                    
                )}
            </ul>
        </div>
    )
}

export default Sidebar