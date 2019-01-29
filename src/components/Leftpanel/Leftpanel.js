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
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{position: "absolute", zIndex: -70000}}>
                    <defs>
                        <filter id="squiggly-0">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-1">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-2">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-3">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-4">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                    </defs>
                </svg>
           <Header func={this.click} func2={this.click2}/>
            <Tasklist notUpdateEditor={this.props.notUpdateEditor}
                writeQuest={this.writeQuest}/>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  