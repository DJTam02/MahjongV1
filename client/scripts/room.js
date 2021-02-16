document.getElementById("roomForm").addEventListener("submit", function() {
    sock.emit("room-req", document.getElementById("roomID").value);
});
sock.on("roomEntrySuccess", (state) => {
    swap("room", state);
});
sock.on("roomEntryFail", (roomCode, code) => {
    if (code == 404) {
        alert("Room \"" + roomCode + "\" does not exist!");
    }
});