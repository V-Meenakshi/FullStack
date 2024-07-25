export default function Product(props){
    return(
        <div className="card" style={{width: "250" ,height:"400"}}>
        <img src={props.userFromArray.image} width={100}  alt={"profile"} />
        {/* <h2>{props.program}</h2>
        <p>{props.des}</p> */}
        <div className="card-body">
            <h6>{props.userFromArray.title}</h6>
            <h6>{props.userFromArray.category}</h6>
            <h6>{props.userFromArray.price}</h6>
            <button type="button" className="btn btn-primary">Add to Cart</button>

        </div>
        

    </div> 
    );
}