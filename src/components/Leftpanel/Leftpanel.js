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

        this.state = {
            passStages: localStorage['passStages'],
            passQuests: localStorage['passQuests']
        }
    }

    componentWillReceiveProps( ) {
        this.setState({
            passStages: localStorage['passStages'],
            passQuests: localStorage['passQuests']
        })
    }

    writeQuest = (stage, quest) => {
        this.props.writeQuest(stage, quest);
    }

    render() {

      return (
        <div>
           <Header func={this.click} func2={this.click2}/>
           <Tasklist notUpdateEditor={this.props.notUpdateEditor} passStages={this.state.passStages} passQuests={this.state.passQuests} writeQuest={this.writeQuest}/>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  