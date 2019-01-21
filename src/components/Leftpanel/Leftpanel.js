import React,{ Component } from 'react';
import Tasklist from './Tasklist.js'
import Header from './Header.js'

import Tasklist2 from './Tasklist2.js'

class Leftpanel extends Component {

    constructor() {
        super();
        this.click = () => {
            this.props.func();
        }
        this.click2 = () => {
            this.props.func2();
        }
    }

    writeQuest = (stage, quest) => {
        this.props.writeQuest(stage, quest);
    }

    render() {
      return (
        <div>
           <Header func={this.click} func2={this.click2}/>
           {/* <Tasklist title="hhhhh"/> */}
           <Tasklist2 writeQuest={this.writeQuest}/>
            <footer className="footer"><p>Ricardo Milos</p></footer>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  