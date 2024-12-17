import React ,{useState , useEffect} from "react";
import "./nav.css"


export default function Nav(){
    const name = "Nesta Walgwe"
    const [nameshow,setNameshow] = useState("")

    //function to generate name in nav
    useEffect(()=>{
        let currentName =""
        let i = 0
        const nameGen = () => {
            if(i<name.length){
                currentName += name[i]
                setNameshow(currentName)
                i++
                setTimeout(nameGen,200)
            }
        }

        nameGen();

        return  () => clearTimeout(nameGen)                
        },[name]);
        //end 
    return (
        <div className="nav">
            <h1 className="name"> {nameshow}</h1>
            <div className="buttons">
                <button className="resume">resume</button>
                <button className="dropdown">...</button>
            </div>
        </div>
    )
}