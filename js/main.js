/**
 * Created by Rich on 30-Jan-16.
 */
var socket = io();

socket.on('message', function(msg){
    $('#messages').append($('<li>').text(msg));
});

function emitMessage(message) {
    socket.emit('message', message);
}