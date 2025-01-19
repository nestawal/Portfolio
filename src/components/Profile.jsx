import React from "react";

export default function Profile(){
    return(
        <>
             <img src="/src/pics/profile.jpg" alt="" className="profile"/> 
            <div className="socialLane">
                <img src="/src/pics/linkedin.png" alt="" className="socials"/> 
                <img src="/src/pics/email.png" alt="" className="socials"/> 
                <img src="/src/pics/github.png" alt="" className="socials"/> 
            </div>
        </>
    )
}