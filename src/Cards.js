

export default function Cards(props){
    return(
        <div className="card" style={{width: "200"}}>
            
            <img src="/profile.jpeg" width={100} style={{border: "3px solid black", borderRadius:"20px"}} alt={"profile"} />
            {/* <h2>{props.program}</h2>
            <p>{props.des}</p> */}
            <div className="card-body">
                <h4>{props.userFromArray}</h4>
                <h6>{props.userprop.branch}</h6>
                <h6>{props.userprop.college}</h6>
                <button type="button" className="btn btn-primary">Connect</button>

            </div>
            

        </div>
        // <div className="card" style={{"width: 18rem;"}}>
        //     <img src="./profile.jpeg" class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>
    );
}