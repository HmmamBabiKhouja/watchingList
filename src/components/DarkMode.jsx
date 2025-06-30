import {useState, useEffect} from "react"
import Night from "../media/night-svgrepo-com.svg?react"
import '../index.css'

export default function DarkMode(){

    const [isDark, setTheme] = useState(()=>{
        return localStorage.getItem("theme")==="dark";
    });

    useEffect(()=>{
        document.body.className = isDark? "dark" : "light";
        localStorage.setItem("theme", isDark ? "dark" : "light")
    },[isDark]);

    return(
        <div className="dark-mode">
            <button className="btn btn-header" onClick={()=>setTheme(prev => !prev)} aria-label="dark-mode">
                <Night className="icon"/>
            </button>
        </div>
    )
}


