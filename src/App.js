import logo from './logo.svg';
import Styles from './App.css';
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import Details from './Details';
import Click from "./Click"
import Season from "./Season"
class App extends React.Component {
   
  constructor(props){
    super(props);
    this.state={lat:null,eror:""}
    window.navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({lat:position.coords.latut})
      
    },
    err=>{
      this.setState({eror:err.message})
    }
    )
  }
 
 
  render() {
    
  
  if(this.state.lat && !this.state.eror){
   return <div>lati:{this.state.lat}</div>
  }
   if(!this.state.lat && this.state.eror){
  return <div><Season ero={this.state.eror}/></div>
}
if(!this.state.lat && !this.state.eror){
  return <div>loading...</div>
}
}
}
export default App;
