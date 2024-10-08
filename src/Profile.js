import { useContext, useState } from "react";
import { globalContext } from "./App";
import Navigation from "./Navigation";
// import Home from "./Home";

export default function Profile(){
    const {globalObj}=useContext(globalContext);
    const [showPassword, setShowPassword] = useState(false);
    const {setGlobalIsLogin}=useContext(globalContext);
    const logoutAction=()=>{
        setGlobalIsLogin(false);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <Navigation/>
            <div className="container" style={{display:"flex",justifyContent:"center",gap:"20px",flexDirection:"column",width:"400px",padding:"20px"}}>    
                <div className="card" style={{width:"300" ,display:"flex",flexDirection:"column",padding:"15px"}}>
                <h1>Profile</h1>
                <p style={{marginBottom:"10"}}>Your details</p>
                    <div className="card-body">
                        <p>College Id</p>
                        <h6>{globalObj.collegeIdValue}</h6>
                        <p>Password</p>
                        <h6>
                            {showPassword ? globalObj.passwordValue : "......."}
                            <u onClick={togglePasswordVisibility} style={{ marginLeft: "10px" }}>
                                {showPassword ? "Hide" : "Show"}
                            </u>
                            {/* <p><a href={togglePasswordVisibility} className="link-underline-dark">{showPassword ? "Hide" : "Show"}</a></p> */}
                        </h6>
                        <p>Email address</p>
                        <h6>{globalObj.emailValue}</h6>
                        <p>Branch</p>
                        <h6>{globalObj.branchValue}</h6>
                        <p>Year</p>
                        <h6>{globalObj.yearValue}</h6>
                        <p>Gender</p>
                        <h6>{globalObj.genderValue}</h6>
                        <button className="btn btn-dark" onClick={logoutAction}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}