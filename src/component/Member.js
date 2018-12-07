import React, {Component} from "react";

export default class Member extends Component{
    render(){
        return(
            <div className="App-intro">
                You are logged in, and you may proceed... or go back to <a href="/">Login Page</a>
                <br/><br/>
                
                <a href="/ATSUser">Click Here</a> to See a list of ATS users 
                <br/><br/>

                <a href="/ATSGoal">Click Here</a> to See a list of ATS goals
                <br/><br/>
                
                <button onClick={this.props.auth.Logout}>Logout</button>

            </div>

        )
    }
}