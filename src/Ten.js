import { useRef } from "react";

export default function Ten(){
const firstRef=useRef(null); //reference
    const formSubmitted = (event) =>{
        event.preventDefault(); // prevent reload
        console.log("Form Submitted!");
        console.log(firstRef.current.value);
        firstRef.current.value=" ";//clear value
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit"  >Submit</button>
            </form>
        </div>
    );
}