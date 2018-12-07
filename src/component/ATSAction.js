import React, {Component} from "react";


export default class ATSAction extends Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('http://www.dallasgrand.com/ws_user/ServiceUsers.asmx/Get_ATS_Data')
            .then(res=> res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render(){
        var {isLoaded, items} = this.state;

        if (!isLoaded){
            return <div> Loading...</div>;
        }
        else{
            return(
                
                <div  className="App">
                    <label className="App-intro">This information is for non logged in member only <a href="/">Click Here</a> return to Home </label><br/><br/>
                    <label className="App-intro"><a href="http://www.dallasgrand.com/ws_user/ServiceUsers.asmx/Get_ATS_Data">Click Here</a> to web service link</label><br/><br/>
                    <table className="div-table">
                        <tr className="tb_td">
                            <td className="tb_td">Action Name</td>
                            <td className="tb_td">Complexity</td>
                        </tr>  
                        {items.map(item=>(
                            <tr  key={item.action_name}>
                                <td>
                                      {item.action_name}    
                                </td> 
                                <td>
                                      {item.action_complexity}    
                                </td>
                            </tr>
                        ))}
                    </table> 
                </div>
            );
        }
    }
}