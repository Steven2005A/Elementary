import React, {Component} from "react";
import Auth from "../Auth";

export default class Callback extends Component{
    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render(){
        return(
            <div>
                Loading...<br/>
                <a href="/">Click Here</a> return to Home<br/>
            </div>
        )
    }
}