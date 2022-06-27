import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    color: ${props=> props.isActive ? '#9dd18c' : '#fff'};
    text-decoration: none;
    font-weight: 600;
    :hover{
        color: #9dd18c
    }

`;