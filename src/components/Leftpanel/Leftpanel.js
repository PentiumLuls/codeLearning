import React,{ Component, Fragment } from 'react';
import Header from './Header.js'

import Tasklist from './Tasklist2.js'

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const getChaptersQuery = gql`
query {
    chapters {
      id,
      title,
      quests(id:45) {
        title,
        id
      }
    }
  }
`

class Leftpanel extends Component {

    constructor() {
        super();
        this.click = () => {
            this.props.func();
        }
        this.click2 = () => {
            this.props.func2();
        }
        this.click3 = () => {
            this.props.func3();
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
                <Query query={getChaptersQuery}>

                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error BLYAT</p>;
                    
                    return data.chapters.map((c, index) => (
                        <div key={index}>
                            <p>{c.title}</p>
                        </div>
                    ));
                }}
                    
                    {/* // {
                    //     (loading, error, data) => {
                    //         if (loading) return <h1>Loading blyatb...</h1>;
                    //         if (error) return <h1>ErrorBlyat !!@</h1>;
                    //         // return <h1>B-bb... Boruto?</h1>
                    //         console.log(data);
                    //         return (
                    //             <div>{data}</div>
                    //         // <Fragment>
                    //         //     {data.data.chapters.map(c => {
                    //         //             return <div>{c.title}</div>
                    //         //     })}
                    //         // </Fragment>
                    //         )
                    //     }
                    // } */}
                </Query>
           <Header func={this.click} func2={this.click2} func3={this.click3}/>
            <Tasklist func2={this.click2} notUpdateEditor={this.props.notUpdateEditor}
                writeQuest={this.writeQuest}/>
        </div>
      );
    }
  }
  
  export default Leftpanel;
  
  