import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";
import {quests} from "../../plot/quests";

export default class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            replics: [],
            content: [],
            replicN:0,
            dialogN: 0,
            hintsN: 0,
            
            
        }
    }

    writeReplics = (replics) => {
        let x = 0;
        let interval = setInterval(() => {
            let replic = <li className='mefistoreplic'> {replics.name}:~$ {replics.text[x++]} </li> ;
            this.setState({
                replics: [...this.state.replics, replic],
               
            });
            if (x >= replics.text.length) {
                clearInterval(interval);
            }
        }, 1000);
    };

    showChat() {
        const state = this.state;
        state.visible = !state.visible;
        this.setState({state})
    }

    getDialogs = () => {
        console.log("GET DIALOGS!!!");
       /* this.setState({
            content:  this.state.replics.map((r, i) => <li key={i} className='mefistoreplic'>{r}</li>)
        });*/
        const content = this.state.content.concat();
        let replicN = this.state.replicN;
        
        content.push(this.state.replics[replicN])
        replicN += 1;
        this.setState({
            content,
            replicN,
        }
        )
    };

    getHints() {
        
        const hints = quests[this.props.stage].quests[this.props.quest].hints;
        const content = this.state.content;
        
        if(this.state.hintsN < hints.length){
            content.push(<li className='hint'>{hints[this.state.hintsN]}</li>); 
                
            this.setState({
            content,
            hintsN: this.state.hintsN + 1,
            });
            
        }else{
               
            content.push(<li className='hint'>{hints[0]}</li>);
            
            this.setState({
            content,
            hintsN:1});  
             
            };
            let element = document.getElementById('box')    ;
            element.scrollTop=element.scrollHeight  ; 
           
            
       
          

        

        console.log(hints[this.state.hintsN])
    }
    clearChat(){
        this.setState({
            replics: [],
            content: [],
            replicN:0,
            dialogN: 0,
            hintsN: 0,
          

        })
    }
   

    componentDidMount() {
        try {
           // this.clearChat();
          //  this.writeReplics(dialogs[this.props.stage][this.props.quest][this.state.dialogN]);
            
        }  catch {
            console.log("non replics")
        }
        
    }
    componentWillReceiveProps(){
    
         this.clearChat();
         
    }

    render() {

        if (this.state.visible === true)
        
            return (
                
                <div className='chatbot'>
                    <div className="bot-top-panel">
                    <button className='buttonchatclose' onClick={this.showChat.bind(this)}>X</button>
                    </div>
                    <div className="dialogbox" id='box' ><ul>{this.state.content}</ul></div>
            { /*<button className='chatbutton' onClick={this.getDialogs.bind(this)}>nextDialog</button>*/}
                <div className="bot-bottom-panel">
                    <button className='chatbutton' onClick={this.getHints.bind(this)}>GET HINT</button>
                    <button className='chatbutton' id="clear-chat" onClick={this.clearChat.bind(this)}>CLEAR CHAT</button>
                </div>
                </div>
            );
        return (
            <div className="chatbutton-wrapper">
                <button className='buttonchatopen' onClick={this.showChat.bind(this)}>CHAT</button>
            </div>
        )
        

}
}
