import React ,{useState , useEffect} from "react";

 //function to generate words
   export default function Wordgen(a){
    const [wordShow,setWordShow] = useState("")
    
    useEffect(()=>{
        let currentWord =""
        let i = 0
        const gen = () => {
            if(i<a.length){
                currentWord += a[i]
                setWordShow(currentWord)
                i++
                setTimeout(gen,200)
            }
        }

        gen();

        return  () => clearTimeout(gen)  
                   
        },[a]);
        //end 
        return wordShow 
   }
