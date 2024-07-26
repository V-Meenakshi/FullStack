import { useContext } from "react";
import Navigation from "./Navigation";
import Product from "./product";
import ProductList from "./productList";
import { globalContext } from "./App";

export default function Cart(){
    const{globalLstObj,setGlobalListObj}=useContext(globalContext);
    return(
        <div>
            <Navigation/>
            <div className="container">
                <h1>Cart</h1>
                
                

            </div>
        </div>

    );
}