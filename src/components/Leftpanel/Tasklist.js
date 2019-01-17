import React, { Component } from 'react';

import './Tasklist.css';

class Tasklist extends Component {
  
  
  state={title:"6789",
  tasks:[ 1,8,9,5,8],
  footValue:"jjjjj"
  }
  renderTaskList(){
    const tasks = this.state.tasks;
    const Tlis = tasks.map((el)=>
      <li>{el}</li>
    )
    return(
      <ul>{Tlis}</ul>
    )
  }
  render() {
    return (
          <div>
          <div className="Tlist">
           <header>{this.state.title}</header>
          
            {this.renderTaskList()}
          </div>
           <footer className="footer">{this.state.footValue}</footer> 
           
           </div>
          
          
        
     
    )
  }
}

export default Tasklist;


