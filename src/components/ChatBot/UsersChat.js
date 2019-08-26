import React, {useState, useEffect, useRef} from 'react';
import { connect_socket, send, connected, getName} from "../../services/ChatServise"

export function UsersChat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [connectedL, setConnectedL] = useState(connected());
    const last_message = useRef(null);

    const sendToChat = async () => {
        await send(message);
        setMessage('');
        setMessages([...messages, {'self': true, 'autor': name, 'msg': message}])
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const parseMsg = (msg, isLast) => {
        if (isLast) {
            if (msg.self) {
                return <li ref={last_message} key={Math.random()} className='mephistoreplic_user'><span className="username">You:</span> {` ${msg.msg}`} </li>
            } else {
                return <li ref={last_message} key={Math.random()} className='mephistoreplic_someone'><span className="username">{`${msg.autor}:`}</span> {`${msg.msg}`} </li>
            }
        }
        if (msg.self) {
            return <li key={Math.random()} className='mephistoreplic_user'><span className="username">You:</span> {` ${msg.msg}`} </li>
        } else {
            return <li key={Math.random()} className='mephistoreplic_someone'><span className="username">{`${msg.autor}:`}</span> {`${msg.msg}`} </li>
        }
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            connectToChat();
        }
    } 

    const onEnterPressChat = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendToChat();
        }
    }

    const connectToChat = () => { 
        setConnectedL(true);
        con();
    }

    useEffect(function(x) {
        if (connectedL) {
            con();
        }
        
      });

      const con = () => {
        const ws = connect_socket(name);
            ws.onmessage = e => {
                let msg = JSON.parse(e.data);
                    console.log("Message from socket:", msg);
                    if (msg.username !== getName()) {
                        setMessages([...messages, {'self': false, 'autor': msg.username.split('.')[0], 'msg': msg.message}])
                    }
                }
      }

    if (connectedL) {
        return (
            <div><div className="dialogbox-chat" id='box' ><ul className="chat_ul">{messages.map((msg, i, arr) => {
                return (parseMsg(msg, i === arr.length - 1))
            })}<li className="chat-enter_facke">...</li></ul></div>
            {last_message.current ? last_message.current.scrollIntoView({ behavior: "smooth" }) : console.log('oh nooo', last_message)}
            <div className="bot-bottom-panel-chat">
                <textarea className="message_area" onKeyDown={onEnterPressChat} value={message} onChange={handleChange} />
                <button className='chatbutton-chat ' id="clear-chat" onClick={sendToChat}>SEND</button>
            </div></div>
        );
    } else {
        return (
            <div>
                <div className="bot-bottom-panel-chat">
                    <p className="text">What is your name</p>
                    <input className='name_input' onKeyDown={onEnterPress} defaultValue={getName()} onChange={handleChangeName} />
                    <button className='connect_chat__button 'onClick={() => {connectToChat()}}>CONNECT</button>
                </div>
            </div>
        );
    }
    
  }