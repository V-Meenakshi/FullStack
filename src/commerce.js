// import GetReview from "./GetReview";
import Input from "./input";
import Nine from "./Nine";

export default function Commerce(){
    return(
        <div>
            <div className="card">
                <h1>Product Name</h1>
                <div  style={{display:"flex"}}>
                    <img src="/product.jpeg" width={500} alt="product" />
                    <div>
                        <h4>  Product Name</h4>
                        <p>   A watch is a portable timepiece that is designed to be worn on the wrist or carried in the pocket. The movement of a watch is driven either by a spring or by electricity. Along with clocks, watches are the most common devices for measuring time.</p>
                        <h4>  Rs.1000.00</h4>
                        <Nine />
                    </div>
                    
                </div>
                <h5>Product specification</h5>
                <p>A watch is a portable timepiece that is designed to be worn on the wrist or carried in the pocket. The movement of a watch is driven either by a spring or by electricity. Along with clocks, watches are the most common devices for measuring time.</p>
                
                
            </div>
            <div className="card">
                <Input />
            </div>
            
                
            
        </div>
    );
}