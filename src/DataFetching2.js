import { useEffect, useState } from "react";
import axios from "axios";
export default function DataFetching2(){
    //create an state variable to assign response JSON
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchMyData = async ()=>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
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
                <th scope="col">UserId</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
            </tr>
            </thead>
            <tbody>
            
            {data.map((item, index) => 
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>)}

        
            
            </tbody>
        </table>
      </div>
    );
}