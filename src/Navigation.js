import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Home";
import { globalContext } from "./App";
export default function Navigation(){
    const{globalCount,setGlobalCount}=useContext(globalContext)
    return(

        <div style={{display:"flex",gap:"10px",cursor:'pointer' ,flexDirection:"row",
        justifyContent:"space-between",background:"#e5e5e5",padding:"15px"}}>
            <div style={{display:"flex",gap:"10px",cursor:'pointer' }}>
                <Link to="/" >Home</Link>
                <Link to="/products">View products</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div style={{display:"flex",gap:"10px",cursor:'pointer' }}>
                <Link to="/cart">Cart({globalCount})</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}