import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "./App";

export default function Register(){
    const[collegeIdValue, setCollegeId]=useState("");
    
    const collegeIdRef=useRef(null);
    const[passwordValue,setPassword]=useState("");
    // const {passwordValue,setPassword}=useContext(globalContext);
    const passwordRef = useRef(null);
    const[emailValue,setEmail]=useState("");
    const emailRef = useRef(null);
    const[branchValue,setBranch]=useState("");
    const[yearValue,setYear]=useState("");
    const[genderValue,setGender]=useState("");
    const[user,setUser]=useState("");
    const{setGlobalObj}=useContext(globalContext);
    
    useEffect(() =>{
        // setCount(5);
        collegeIdRef.current.focus();
        
    },[]);
    const getCollegeId=(event)=>{
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }
    const getPassowrd=(event)=>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const getEmail=(event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const getBranch=(event)=>{
        setBranch(event.target.value);
        console.log(event.target.value);
    }
    const getYear=(event)=>{
        setYear(event.target.value);
        console.log(event.target.value);
    }
    const getGender = (event)=>{
        console.log(event.target.value);
        setGender(event.target.value)
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            collegeIdValue,passwordValue,emailValue,branchValue,yearValue,genderValue
        }
        console.log(obj);
        setUser(obj);
        setGlobalObj(obj);
        setCollegeId("");
        setBranch("");
        setEmail("");
        setGender("");
        setYear("");
        setPassword("");
        collegeIdRef.current.value=("");
        passwordRef.current.value=("");
        emailRef.current.value=("");

        console.log(user);
    }
    

    return(
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
            <div className="card" style={{width:"300" ,display:"flex",flexDirection:"column",padding:"15px"}}>
                <h3>Register</h3>
                <p>provide your details to login</p>
                <form onSubmit={submitData}
                    style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <label>College Id</label>
                    <input type="text" placeholder="College Id" onChange={getCollegeId} ref={collegeIdRef}/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={getPassowrd} ref={passwordRef}/>
                    <label>Email address</label>
                    <input type="text" placeholder="Email address" onChange={getEmail} ref={emailRef}/>
                    <label>Branch</label>
                    <select className="form-select form-select-sm" ariaLabel="Small select example" onChange={getBranch} value={branchValue}>
                        <option value="">Select a branch</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                    </select>
                    <label>Year</label>
                    <select className="form-select form-select-sm" ariaLabel="Small select example" onChange={getYear} value={yearValue}>
                        <option value="">Select a year</option>
                        <option value="1st year">1st year</option>
                        <option value="2nd year">2nd year</option>
                        <option value="3rd year">3rd year</option>
                        <option value="4th year">4th year</option>
                    </select>
                    <label>Gender</label>
                    {/* <div>
                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={getGender}/>
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                            
                        </div>
                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={getGender}/>
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" onChange={getGender}/>
                            <label className="form-check-label" for="inlineRadio2">other</label>
                        </div>

                    </div> */}
                    {/* another one for radio button
                     */}
                     <div style={{dispaly:"flex"}}>
                        <input type="radio" checked={genderValue==="Male"} value="Male" onChange={getGender}></input>Male  
                        <input type="radio" checked={genderValue==="Female"} value="Female" onChange={getGender}></input>Female  
                        <input type="radio" checked={genderValue==="Other"} value="Other" onChange={getGender}></input>Other
                    </div>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <button type="submit" className="btn btn-dark" style={{width:"100" ,justifyContent:"flex-end"}} onClick={submitData}>Register</button>
                    </div>
                </form>
        
            </div>
        </div>
    );
}