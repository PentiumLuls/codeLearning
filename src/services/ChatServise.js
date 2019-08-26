const ADDRES = 'ws://0.tcp.ngrok.io:13923/ws';

let ws = null
let username = null

export function connect_socket(name) {
    if (!ws) {
        username = name + "." + Math.random();
        ws = new WebSocket(ADDRES);
    }
    return ws
}

export async function send(msg) {
    await ws.send(
        JSON.stringify({
        username: username,
        message: msg
        })
    );
      
}

export function connected() {
    return !!ws
}

export function getName() {
    return username ? username : '';
}