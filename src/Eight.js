import React from "react";
class Eight extends React.Component {
    count =10;
    name ="V.Meenakshi";
    constructor(){
        super();
        this.state ={
            number : 1
        };
        console.log("Constructor is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("Component updated!");
    }
    componentWillUnmount(){
        console.log("Will be unmounted");
    }
    funcEightBtnClick = () => {
        console.log("Button is clicked!");
        console.log(this.count+1);
        // update the stae
        this.setState({number: this.state.number+1});
    }
    
    render() {
        
        return (
            <div>
                <h2>{this.name} {this.count} {this.state.number}</h2>
                
                <button type="button" className="btn btn-primary" onClick={this.funcEightBtnClick}>Connect</button>

            </div>
            
        );
    }
}
export default Eight;