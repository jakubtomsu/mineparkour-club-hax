const W3CWebSocket = require('websocket').w3cwebsocket;

const NAME = 'NAME HERE';
const TIME = 100; // time in milliseconds it takes for each win

const websocket = new WebSocket('wss://gs0.mineparkour.club/ws');
websocket.binaryType = 'arraybuffer';

websocket.onopen = function() {
    console.log('Connected');
    start();
};

function toBuffer(packets) {
    const packetString = JSON.stringify(packets);
    const buffer = new ArrayBuffer(packetString.length);
    const intArray = new Uint8Array(buffer);
    for (var i = 0; i < packetString.length; i++) {
        intArray[i] = packetString.charCodeAt(i);
    }
    return buffer;
}

function start() {
    const startGamePacket = {
        'type': 'start',
        'name': NAME,
        'skin': 'god'
    };
    const positionPacket = {
        'type': 'setPos',
        'object': { 'x': 0, 'y': 30, 'z': 0 }
    };
    const rotationPacket = {
        'type': 'setRotation',
        'object': { 'angle': 3.141592653589793 }
    };
    websocket.send(toBuffer([startGamePacket, positionPacket, rotationPacket]));

    const packet = toBuffer([{
        'type': 'done',
        'object': 0
    }]);

    setInterval(function() {
        websocket.send(packet);
    }, TIME);
}
