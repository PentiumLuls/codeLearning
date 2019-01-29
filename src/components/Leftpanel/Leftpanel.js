import React,{ Component } from 'react';
import Header from './Header.js'

import Tasklist from './Tasklist2.js'

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

    render() {

      return (
        <div>
           <Header func={this.click} func2={this.click2}/>
            <Tasklist notUpdateEditor={this.props.notUpdateEditor}
                writeQuest={this.writeQuest}/>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  