import { useEffect, useState } from "react";
export default function Nine(){
    // const count =0;
    const [count,setCount] = useState(0);
    
    useEffect(() =>{
        // setCount(5);
        console.log("Use effect is called");
        
    },[count]);//here[count] is called dependencies
    const btnUpdateCount =()=>{
        setCount(count+1);
    }
    const btnDecrement =()=>{
        if(count > 0){
            setCount(count-1);
        }
    }
    const AddtoCart =()=>{
        setCount(1);
    }
    return(
        <div>
            {(count === 0)?
            <button type="button" className="btn btn-success"  onClick={AddtoCart}>Add to Cart</button>:
        
            <div style={{display:"flex"}}>
                
                <button className="btn btn-outline-dark btn-sm" onClick={btnUpdateCount}> + </button>
                <h4> {count} </h4>
                <button className="btn btn-outline-dark btn-sm" onClick={btnDecrement}> - </button>
                
            </div>
            }
        </div>
    );
}