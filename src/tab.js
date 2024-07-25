import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Tab(){
    const [getInput,setInput]=useState(true);
    const loginMessage=()=>{
        setInput(true);
    }
    const registerMessage=()=>{
        setInput(false)
    }
    
    return(
        <div>
            <button type="button" onClick={loginMessage}>Login</button>
            <button type="button" onClick={registerMessage}>Register</button>
            {getInput?
            <div> <Login /></div>:
            <div><Register/></div>}
            {/* <p>{getInput}</p> */}
        </div>
    );
}