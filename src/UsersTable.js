import { useEffect, useState } from "react";
import axios from "axios";
export default function UsersTable(){
    //create an state variable to assign response JSON
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchMyData = async ()=>{
            const res = await axios.get("https://fakestoreapi.com/users");
            console.log(res);
            console.log(res.data);
            const resData=await res.data;
            setData(resData);
            // console.log(resData);
        }
        fetchMyData();
    },[])
    return(
        <div>Fetching Data
            
            <table class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Phone</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col">Zipcode</th>
                {/* <th scope="col">Password</th>
                
                <th scope="col">lat</th>
                <th scope="col">long</th>
                
                <th scope="col">street</th>
                <th scope="col">number</th> */}
                
                
                
            </tr>
            </thead>
            <tbody>
            
            {data.map((item, index) => 
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.name.firstname}</td>
                            <td>{item.name.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                            {/* <td>{item.password}</td>
                            <td>{item.address.geolocation.lat}</td>
                            <td>{item.address.geolocation.long}</td>
                            <td>{item.address.street}</td>
                            <td>{item.address.number}</td> */}
                            
                            
                        </tr>)}

        
            
            </tbody>
        </table>
      </div>
    );
}