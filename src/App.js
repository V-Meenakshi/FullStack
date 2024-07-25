import {BrowserRouter,Routes,Route} from "react-router-dom";
import { createContext, useState } from "react";
import Tab from "./tab";
import CardsList from "./CardsList";
import ProductList from "./productList";
import Info from "./Info";
import Home from "./Home";
import Profile from "./Profile";
export const globalContext = createContext();
export default function App(){
    const[globalCount,setGlobalCount]=useState(0);
    const[globalObj,setGlobalObj]=useState([]);
    return(
        <globalContext.Provider 
        value={{globalCount,setGlobalCount,globalObj,setGlobalObj}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<ProductList />}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    );
}