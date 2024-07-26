import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Home";
import { globalContext } from "./App";
export default function Navigation(){
    const{globalCount,setGlobalCount}=useContext(globalContext);
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext);
    const logoutAction=()=>{
        setGlobalIsLogin(false);
    }
    useEffect(()=>{
        const name=localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
        
    })
    return(

        <div style={{display:"flex",gap:"10px",cursor:'pointer' ,flexDirection:"row",
        justifyContent:"space-between",background:"#e5e5e5",padding:"15px"}}>
            <div style={{display:"flex",gap:"10px",cursor:'pointer' }}>
                <Link to="/" >Home</Link>
                <Link to="/products">View products</Link>
                
                
            </div>
            <div style={{display:"flex",gap:"10px",cursor:'pointer' }}>
                <Link to="/cart">Cart({globalCount})</Link>
                <Link to="/profile">Profile</Link>
                <button className="btn btn-dark" onClick={logoutAction}>Logout</button>
                
            </div>
        </div>
    );
}