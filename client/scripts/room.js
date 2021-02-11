const sock = io();
document.getElementById("roomForm").addEventListener("submit", function() {
    sock.emit("room-req", document.getElementById("roomID").value);
});