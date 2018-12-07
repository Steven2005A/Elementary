import React, {Component} from "react";


export default class ATSUser extends Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('http://www.dallasgrand.com/ws_user/ServiceUsers.asmx/Get_ATS_User_Data')
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
                    <label className="App-intro"><a href="/Member">Click Here</a> to return </label><br/>
                    <label className="App-intro"><a href="http://www.dallasgrand.com/ws_user/ServiceUsers.asmx/Get_ATS_User_Data">Click Here</a> to web service link</label><br/><br/>
                    <table className="div-table">
                        <tr className="tb_td">
                            <td className="tb_td">First Name</td>
                            <td className="tb_td">Last Name</td>
                            <td className="tb_td">City</td>
                            <td className="tb_td">Zip</td>
                        </tr>  
                        {items.map(item=>(
                            <tr  key={item.id}>
                                <td>
                                      {item.Fname}    
                                </td> 
                                <td>
                                      {item.Lname}    
                                </td> 
                                <td>
                                      {item.City}    
                                </td> 
                                <td>
                                      {item.Zip}    
                                </td> 
                            </tr>
                        ))}
                    </table> 
                </div>
            );
        }
    }
}