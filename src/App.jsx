import React from "react";
import "./App.css";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {a : 1 , b : 2 , c : 3}; 
    }

    b1 = ()=>{
        this.setState({a : 10});
        document.getElementById("ans").value = (this.state.a * this.state.b * this.state.c);
    }

    b2 = ()=>{
        this.setState({b : 20});
        document.getElementById("ans").value = (this.state.a * this.state.b * this.state.c);
    }

    b3 = ()=>{
        this.setState({c : 30});
        document.getElementById("ans").value = (this.state.a * this.state.b * this.state.c);
    }

    render(){
        return (
            <div id="formula">
                <button onClick={this.b1}>Button 1</button>
                <br></br><br></br> 
                <button onClick={this.b2}>Button 2</button>
                <br></br><br></br> 
                <button onClick={this.b3}>Button 3</button>
                <br></br><br></br>
                <input id="ans" placeholder="Answer" type="number"></input>
            </div>
        );
    }
}

export default App;