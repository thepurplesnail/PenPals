import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { SidebarData } from './component/sidebar-data'
import './css/sidebar.css'
import { IconContext } from 'react-icons'

const Sidebar = props => {

    const StyledLink = styled(NavLink)`
        color: white;
        text-decoration: none;
        font-weight: 600;
        :hover{
            color: #9dd18c
        }
    `
      
    return(
        <div className='sidebar'>
            <ul>
                {SidebarData.map((item, index) => 
                    
                    <li key = {index}>
                        <StyledLink to = {item.path} >
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