import { useEffect, useState } from "react";
import Product from "./product";

export default function ProductList(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const resData=await res.json();
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    },[])
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            
            {/* <Cards user={obj}/> 
            {/* Declare property */}
            {/* <Cards user={obj}/>
            <Cards user={obj}/> */}
            {
            data.map((item,index) => (<Product key={index}
                                         
                                         userFromArray={item} 
                                         />))
            }
        </div>
    );
}