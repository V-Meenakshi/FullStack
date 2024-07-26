import { useContext } from "react";
import Nine from "./Nine";
import { globalContext } from "./App";

export default function Product(props){
    const {globalCount,setGlobalCount}=useContext(globalContext);
    return(
        <div className="card" style={{width: "20rem" ,margin:"40"}}>
        <img src={props.userFromArray.image} width={250} height={250} alt={"profile"} />
        {/* <h2>{props.program}</h2>
        <p>{props.des}</p> */}
        <div className="card-body">
            <h6>{props.userFromArray.title}</h6>
            <h6>{props.userFromArray.category}</h6>
            <h6>{props.userFromArray.price}</h6>
            {/* <button type="button" className="btn btn-primary">Add to Cart</button> */}
            <Nine/>

        </div>
        
        

    </div> 
    );
}