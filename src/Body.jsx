import React from "react";
import Wordgen from "./Wordgen"
import projects from "./projects"
import Project from "./Project";
import Skill from "./Skill";
import skills from "./skills";

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

        const projCards = projects.map(item => {
            return(
                <Project 
                    {...item}
                />
            )
        })

        const skillCard = skills.map(item => {
            return(
                <Skill
                    {...item}
                />
            )
        })
   
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
                <div>{projCards}</div>
            </div>
            <div className="item4">
                <h1>Skills</h1>
                <div>
                   {skillCard}
                </div>
            </div>
        </div>
    )
}