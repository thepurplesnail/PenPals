import React from "react";
import {StyledLink, StyledCaret} from "../styling/styling.jsx"

const SidebarLink = props => {
    return (
        <div className={`link-wrapper depth-${props.depth}`}>
            <StyledLink to = {props.path} key = {props.key} depth = {props.depth}>
                <div>
                    {props.icon}
                    {props.title}
                </div>
            </StyledLink>
            { !!props.subset &&
                <div onClick = {() => {
                    props.changeExpanded()
                    }}>
                    <StyledCaret expanded = {props.expanded}/>
                </div>
            }
        </div>
    )
}

export default SidebarLink