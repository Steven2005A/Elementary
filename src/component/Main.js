import React, {Component} from "react";

export default class Main extends Component{
    render(){
        return(
            <div>
                
                {this.props.auth.isAuthenticated() && 
                    <p className="App-intro">
                        Hello, {this.props.name}, you are now able to see ATS Users and ATS Actions
                        <br/>
                        <a href="/Member">Click here</a> to begin
                    </p>
                }
                
                {!this.props.auth.isAuthenticated() &&
                    <div className="App-intro">
                        <hr/>
                        You can <a href="/ATSAction">Click here</a> to take a peek at ATS system<br/><br/>
                        Or Log in to proceed ...... ( you may use google account)<br/> 
                        <hr/>
                        <button onClick = {this.props.auth.login}>Login</button>
                    </div>               
                }
            </div>

        )
    }
}