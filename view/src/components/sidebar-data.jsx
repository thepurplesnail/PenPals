import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import {AiFillProject} from 'react-icons/ai';
import {MdArrowDropDown} from 'react-icons/md';
import styled from 'styled-components';

const StyledHome = styled(AiFillHome)`
    padding-right: .5rem;
`
const StyledProject = styled(AiFillProject)`
    padding-right: .5rem;
`

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <StyledHome/>
    }, 
    {
        title: 'Projects',
        path: 'projects',
        icon: <StyledProject/>
    }, 
    {
        title: 'Project',
        path: 'project'
    }, 
    {
        title: 'Document',
        path: 'project/document'
    }
]