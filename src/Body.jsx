import React from "react";
import Wordgen from "./Wordgen"
import projects from "./components/projects"
import Project from "./components/Project";
import Skill from "./components/Skill";
import skills from "./components/skills";
import Profile from "./components/Profile";
import Bio from "./components/Bio"


export default function Body (){
   
        let name = "Nesta Walgwe"
        let specialties = ["software developer","IT technician/specialist"]
       
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
                    <h1>Hello</h1>
                    <Bio />
            </div>
            
            <div className="item2">
                <Profile />
            </div>
            <div className="item3">
                <div className="container3">
                    <h1>Projects</h1>
                    {projCards}
                </div>
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