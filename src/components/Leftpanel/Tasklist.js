import React, { Component } from 'react';

import {quests} from '../../plot/quests'
class Tasklist extends Component {
  
  
  state={title:Object.keys(quests)[0],
  tasks:Object.keys(quests[this.state.title]),
  footValue:"© Ricardo Milos"
  }
  renderTaskList(){
    const tasks = this.state.tasks;
    const Tlis = tasks.map((el)=>
      <li className="questlist">{el}</li>
    )
    return(
      <ul>{Tlis}</ul>
    )
  }
  render() {
    return (
          <div>
          <div className="Tlist">
              <header className="listheader dashed"><p>{this.state.title}</p></header>
          
            {this.renderTaskList()}
          </div>
              <footer className="footer"><p>{this.state.footValue}</p></footer>
           
           </div>
          
          
        
     
    )
  }
}

export default Tasklist;


