import React from "react";

export default function Project(props){
    return(
        <div>
        <h3>{props.name}</h3>
        <div>
            <p>{props.stack}</p>
            <a href={props.link}>link</a>
        </div>
        </div>
    )
}