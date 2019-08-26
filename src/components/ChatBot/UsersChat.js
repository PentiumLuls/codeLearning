import React, {useState} from 'react';
import { connect_socket, send} from "../../services/ChatServise"

export function UsersChat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('Nanachi');
    let sendedMessage = '';

    const sendToChat = async () => {
        sendedMessage = message;
        await send(message);
        setMessage('');
        setMessages([...messages, {'self': true, 'autor': name, 'msg': message}])
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleNewMessage = (msg, self=false) => {
        setMessages([...messages, {'self': self, 'autor': msg.username.split('.')[0], 'msg': msg.message}])
    }

    const parseMsg = (msg) => {
        if (msg.self) {
            return <li key={Math.random()} className='mephistoreplic_user'><span className="username">You:</span> {` ${msg.msg}`} </li>
        } else {
            return <li key={Math.random()} className='mephistoreplic_someone'><span className="username">{`${msg.autor}:`}</span> {`${msg.msg}`} </li>
        }
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendToChat();
        }
    }

    connect_socket(name, handleNewMessage);
  
    return (
        <div><div className="dialogbox-chat" id='box' ><ul>{messages.map((msg) => {
            return (parseMsg(msg))
        })}</ul></div>
        <div className="bot-bottom-panel-chat">
            <textarea className="message_area" onKeyDown={onEnterPress} value={message} onChange={handleChange} />
            <button className='chatbutton-chat ' id="clear-chat" onClick={sendToChat}>SEND</button>
        </div></div>
    );
  }