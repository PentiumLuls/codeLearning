import React, { Component } from 'react';


class Tasklist extends Component {
  
  
  state={title:"Quests",
  tasks:[ 'z','h','o','p','a'],
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


