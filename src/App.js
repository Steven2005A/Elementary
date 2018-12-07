import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Member from './component/Member';
import NotFound from './component/NotFound';
import Callback from './component/callback';
import ATSUser from './component/ATSUser';
import ATSGoal from './component/ATSGoal';
import ATSAction from './component/ATSAction';
class App extends React.Component {
  render(){
      let mainComponent = ""
      switch(this.props.location){
        case "":
          mainComponent=<Main{...this.props}/>;
          break;
        case "Member":
          mainComponent=this.props.auth.isAuthenticated()? <Member{...this.props}/> : <Callback/>;
          break;
        case "callback":
          mainComponent=<Callback/>;
          break;
        case "ATSUser":
          mainComponent=<ATSUser/>;
          break;
        case "ATSGoal":
          mainComponent=<ATSGoal/>;
          break;
        case "ATSAction":
          mainComponent=<ATSAction/>;
          break;
        default:
          mainComponent= <NotFound/>;
      }
    return(
      <div className="App">
        <header className="App-Header">
          <img src={logo} className="App-logo" alt="logo">
          </img>
          <h1 className="App-title">Elementary Page, Welcome <span class="span">{this.props.name}</span></h1>
          <br/><br/><br/><br/>
        </header>
        <div className="App">
          {mainComponent}
        </div>
      </div>
    )
  }
}
export default App;
