import { NavLink } from "react-router-dom"
import styled, {css} from "styled-components"

import { AiFillHome, AiFillProject} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {HiMenuAlt2} from 'react-icons/hi'
import {IoIosClose} from 'react-icons/io'

export const StyledSidebarWrap = styled.div`
    background-color: #3c4b5c;
    height: 100%;
    
    position: absolute;
    left: ${props => props.showSidebar ? '0' : '-100%'};
    transition: 700ms;
    z-index: 10;
`

// icons

export const StyledMenu = styled(HiMenuAlt2)`
    padding: 1rem 1rem;
    height: 2rem;
    width: 2rem;
    :hover{
        color: #9dd18c;
        cursor: pointer;
    }
`
export const StyledClose = styled(IoIosClose)`
    color: #fff;
    height: 2rem;
    width: 2rem;
    :hover{
        color: #9dd18c;
        cursor: pointer;
    }
`
export const StyledLink = styled(NavLink)`
    color: ${props=> props.isActive ? '#9dd18c' : '#fff'};
    text-decoration: none;
    font-weight: 600;
    :hover{
        color: #9dd18c
    }
`;

export const StyledHome = styled(AiFillHome)`
    padding-right: .5rem;
`
export const StyledProject = styled(AiFillProject)`
    padding-right: .5rem;
`
export const StyledCaret = styled(RiArrowDropDownLine)`
    padding: 0 .5rem;
    
    ${props =>
        props.expanded &&
        css`
          transform: rotate(180deg);
        `};
`
