import React, { Component } from 'react';

import {quests} from '../../plot/quests'
class Tasklist extends Component {
  
  
  state={title:Object.keys(quests)[0],
  tasks:quests[Object.keys(quests)[0]],
  newtitle:Object.keys(quests[Object.keys(quests)[0]][0]),
  taskText:quests[Object.keys(quests)[0]][0][Object.keys(quests[Object.keys(quests)[0]][0])][0],
  footValue:"© Ricardo Milos",
  taskshow:false
  }
  renderTaskList(){
    const tasks = this.state.tasks;
    const Tlis = tasks.map((el)=>
      <li className="questlist" onClick={this.Opentask.bind(this)}>{Object.keys(el)}</li>
    )
    return(
      <ul>{Tlis}</ul>
    )
  }
  Opentask(){
   
   const state = this.state;
   state.taskshow= !state.taskshow;

  
   this.setState({state});

  }
  render() {
    {if(this.state.taskshow===false)
    return (
          <div>
          <div className="Tlist">
              <header className="listheader dashed"><p>{this.state.title}</p></header>
          
            {this.renderTaskList()}
          </div>
              <footer className="footer"><p>{this.state.footValue}</p></footer>
           
           </div>
          
          
        
     
    );
    return (
      

      <div className="Tlist">
          <header className="listheader dashed"><p>{this.state.newtitle}</p></header>
      
        <button onClick={this.Opentask.bind(this)}> Назад</button>
        <div> {this.state.taskText}</div>
      </div>
 
);
    }  
}
}

export default Tasklist;


