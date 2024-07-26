// import { Link } from "react-router-dom";
import Tab from "./tab";
import { createContext, useContext } from "react";
import Welcome from "./Welcome";
import { globalContext } from "./App";
export const CartContext = createContext();//create context which can access to all the children context
export default function Home(){
    const{globalIsLogin}=useContext(globalContext);
    
    return(
        
        <div>
            {globalIsLogin?<Welcome/>:<Tab/>}
        </div>
    );
        
        
        

    

} 