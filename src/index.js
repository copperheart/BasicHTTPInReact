import React from 'react';
import { render } from 'react-dom';
import axios from "axios";
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {userName : ""}
    this.handleClick = this.handleClick.bind(this)
  }
   handleClick(){
     axios.get('https://api.github.com/users/maecapozzi')
       .then(response => this.setState({ userName: response.status }))
       .catch(error =>  console.log(error))
  }
  render(){ 
  return(
          <div className = "wrap">
            <button className="btn" onClick = {this.handleClick}>Click Me </button>
            <p>{this.state.userName}</p>
          </div>
  )
  }
}


render(<App />, document.getElementById('root'));
