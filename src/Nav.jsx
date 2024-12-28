import { React ,useState , useEffect} from "react";
import Wordgen from "./Wordgen";


export default function Nav(){
    const name = "Nesta Walgwe"
    const resume = "https://docs.google.com/document/d/e/2PACX-1vTaN4EbjnPHf4s4og_z4IcP_itYhCz0X58paAZJd1xTqmf5kF-TlEjK_bVo2fwcPA5tLIKq9dFHRf3o/pub"

   

   const nameshow = Wordgen(name);
    return (
        <div className="nav">
            <h1 className="name"> {nameshow}</h1>
            <div className="buttons">
                <button onClick={resume} className="resume">resume</button>
                <button className="dropdown">...</button>
            </div>
        </div>
    )
}