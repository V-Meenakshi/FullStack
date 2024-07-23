import { useState } from "react";

export default function Input() {
    const[getInput,setInput] = useState("");
    const[getReview,setReview]=useState([]);
    const inputValueChange=(event)=>{
        // console.log("Input changed");
        setInput(event.target.value);
        // console.log(event.target.value);
    }
    const addReview = ()=>{
        console.log("Adding the review");
        setReview([...getReview, getInput]);
        setInput("");

    }
    
    return(
        <div>
            <h2>Reviews: </h2>
            <input type="text" placeholder="Enter the review" style={{width:"1350px"}} onChange={inputValueChange} value={getInput}/>
            <button type="button" className="btn btn-dark btn-sm" onClick={addReview}>Add the Review</button>
            <h5>Reviews:</h5>
            
            {getReview.map((review, index) => (<h6 key={index}>{review}</h6>))}
                
        </div>
    );
}