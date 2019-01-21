import React, {Component} from 'react'

export default class Chatbot extends Component {
    state={visible:false}
    showChat(){
     const state = this.state;
     state.visible = !state.visible;
     this.setState({state})
    }

getDialogs() {

}

    render(){
       {if(this.state.visible === true)
        return(
            <div className='chatbot' >
            <buttun className='buttonchatclose' onClick={this.showChat.bind(this)} >Close</buttun>
             <div className='dialogbox'>{this.getDialogs} </div>
             <buttun className='chatbuttun'   >nextDialog</buttun> <buttun className='chatbuttun'  >getHint</buttun>
            </div>
            );
            return(
                <div  >
                    <buttun className='buttonchatopen' onClick={this.showChat.bind(this)} >Chat</buttun>
                </div>
                )
        }
    }
}