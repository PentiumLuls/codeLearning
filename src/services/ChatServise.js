import openSocket from 'socket.io-client';

const ADDRES = 'ws://localhost:8080/ws';

let ws = null
let username = null
let msgHandler = null

export function connect_socket(name, messageHandler) {
    msgHandler = messageHandler
    if (!ws) {
        username = name + "." + Math.random();
        ws = new WebSocket(ADDRES);
        ws.addEventListener('message', e => {
        let msg = JSON.parse(e.data);
            console.log("Message from socket:", msg);
            if (msg.username !== username) {
                msgHandler(msg);
            }
        })
    }
}

export async function send(msg) {
    await ws.send(
        JSON.stringify({
        username: username,
        message: msg
        })
    );
      
}
