import React from "react";


export default function Body (){
    return(
        <div className="container">
            <div className="item1">
                <h1>Hello</h1>
                <h3>I am Nesta Walgwe</h3>
                <p> I am a:</p>
                <ul>
                    <li>Software Developer</li>
                    <li>IT tecnician/specialist</li>
                </ul>
            </div>

            <div className="item2">
                <img src="/src/pics/profile.jpg" alt="" className="profile"/> 
                <div className="socialLane">
                    <img src="/src/pics/linkedin.png" alt="" className="socials"/> 
                    <img src="/src/pics/email.png" alt="" className="socials"/> 
                    <img src="/src/pics/github.png" alt="" className="socials"/>    
                </div>
            </div>
            <div className="item3">fool</div>
            <div className="item4">fool</div>
        </div>
    )
}