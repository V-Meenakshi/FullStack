import Cards from "./Cards";

export default function CardsList(){
    const name="React";
    const branch="Aiml";
    const obj ={name:"V.Meenakshi",
                branch:"AIML",
                college:"SVECW",};
    const users = ["name 1","name 2","name 3","name 4","name 5","name 6"];
    
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            
            {/* <Cards user={obj}/> 
            {/* Declare property */}
            {/* <Cards user={obj}/>
            <Cards user={obj}/> */}
            {
            users.map((user,index) => (<Cards key={index}
                                        program={name}
                                         col={branch} 
                                         userprop={obj} 
                                         userFromArray={user} 
                                         />))
            }
        </div>
    );
}