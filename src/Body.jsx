import React from "react";
import Wordgen from "./Wordgen"

export default function Body (){
   
        let name = "Nesta Walgwe"
        let specialties = ["software developer","IT technician/specialist"]
        let bio = Wordgen("My name is Nesta Walgwe ,%nI am a: %n-Software Dev %n -IT Technicician %n I have worked on several projects that you may see after some few scrolls and I am really excited to be able to do more cool things .%nThis is my portfolio have a blast")
        let work = ""
        for(let i = 0;i <specialties.length;i++ ){
            work = specialties[i]
        }
        let showWork = Wordgen(work)
        console.log(showWork)
   
    return(
        <div className="container">
            <div className="item1">
                <div>
                    <h1>Hello</h1>
                    <p>{bio}</p>
                </div>
            </div>

            <div className="item2">
                <img src="/src/pics/profile.jpg" alt="" className="profile"/> 
                <div className="socialLane">
                    <img src="/src/pics/linkedin.png" alt="" className="socials"/> 
                    <img src="/src/pics/email.png" alt="" className="socials"/> 
                    <img src="/src/pics/github.png" alt="" className="socials"/>    
                </div>
            </div>
            <div className="item3">
                <h1>Projects</h1>
                <div>
                <h3>Website template</h3>
                <p>html.css.js</p>
                </div>
            </div>
            <div className="item4">
                <h1>Skills</h1>
                <div>
                    <h3>Frontend Development</h3>
                    <h3>Design</h3>
                    <h3>Figma</h3>
                    <h3>Backend Development</h3>
                    <h3>Database Management</h3>
                    <h3>Python</h3>
                    <h3>Django</h3>
                    <h3>Javascript</h3>
                    <h3>React</h3>
                    <h3>Express</h3>
                    <h3>Node</h3>
                    <h3>Mongo</h3>
                    <h3>sql</h3>
                    <h3>kotlin</h3>
                    <h3>Java</h3>
                </div>
            </div>
        </div>
    )
}