import React from "react";


export default function Project(props){
    return(
        <>
        <h3>{props.name}</h3>
        <div className="linkstack">
            <p>{props.stack}</p>
            <a href={props.link}>link</a>
        </div>
        </>
    )
}