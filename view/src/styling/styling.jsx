import { NavLink } from "react-router-dom"
import styled, {css} from "styled-components"

import { AiFillHome, AiFillProject} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {HiMenuAlt2} from 'react-icons/hi'
import {IoIosClose, IoIosDocument} from 'react-icons/io'

export const highlight = '#7ea7e0'

export const StyledSidebarWrap = styled.div`
    background-color: #3c4b5c;
    height: 100vh;
    position: absolute;
    left: ${props => props.showSidebar ? '0' : '-100%'};
    transition: 700ms;
    opacity: 95%;
    width: 13rem;
`

export const StyledLink = styled(NavLink)`
    color: ${'#fff'};
    text-decoration: none;
    font-weight: 600;
    font-size: ${props => (props.depth === '1') ? '.85rem' : 'auto'};
    :hover{
        color: ${highlight}
    }
`;

// icons

export const StyledMenu = styled(HiMenuAlt2)`
    padding: 1rem 1rem;
    height: 2rem;
    width: 2rem;
    :hover{
        color: ${highlight};
        cursor: pointer;
    }
`
export const StyledClose = styled(IoIosClose)`
    color: #fff;
    height: 2rem;
    width: 2rem;
    :hover{
        color: ${highlight};
        cursor: pointer;
    }
`

export const StyledHome = styled(AiFillHome)`
    padding-right: .5rem;
`
export const StyledProject = styled(AiFillProject)`
    padding-right: .5rem;
`
export const StyledCaret = styled(RiArrowDropDownLine)`
    color: ${'#fff'};
    padding: 0 .5rem;
    
    ${props =>
        props.expanded &&
        css`
          transform: rotate(180deg);
        `};
`
export const StyledDocument = styled(IoIosDocument)`
    padding-right: .5rem;
`