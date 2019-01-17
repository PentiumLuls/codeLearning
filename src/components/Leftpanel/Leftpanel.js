import React,{ Component } from 'react';
import Tasklist from './Tasklist.js'
import Header from './Header.js'

class Leftpanel extends Component {
   
    render() {
      return (
        <div >
           <Header/>
           <Tasklist title="hhhhh"/>
            
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  