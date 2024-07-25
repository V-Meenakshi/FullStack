import { Link } from "react-router-dom";
import Tab from "./tab";
import { createContext, useState } from "react";
import Welcome from "./Welcome";
export const CartContext = createContext();//create context which can access to all the children context
export default function Home(){
    const[isLogin,setIsLogin] =useState(false);
    
    return(
        <CartContext.Provider 
        value={{isLogin, setIsLogin}}> 
        {/* it act as a wrapper class which  provides the context to the all the child which they an access*/}
            <div>    
                {isLogin?<Welcome/>:<Tab />}
            </div>
        </CartContext.Provider>

    );

} 