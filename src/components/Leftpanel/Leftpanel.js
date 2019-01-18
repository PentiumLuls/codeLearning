import React,{ Component } from 'react';
import Tasklist from './Tasklist.js'
import Header from './Header.js'

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
           <Tasklist title="hhhhh"/>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  