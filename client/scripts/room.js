document.getElementById("roomForm").addEventListener("submit", function() {
    sock.emit("room-req", document.getElementById("roomID").value, "room");
});
document.getElementById("room-popup").addEventListener("click", function (e) {
    if (e.target.classList[0] == "flexbox") {
        document.getElementById("room-popup").style.display = "none";
    }
});

sock.on("roomEntrySuccess", (state, from, roomCode) => {
    code = roomCode;
    document.getElementById("roomID").value = "";
    if (state == "In Game") {
        swap(from, "game");
    } else {
        swap(from, "player-select");
    }
});
sock.on("roomEntryFail", (roomCode, code) => {
    if (code == 404) {
        alert("Room \"" + roomCode + "\" does not exist!");
    }
});
sock.on("return-rooms", (allRooms) => {
    console.log(allRooms);
    for (let i = 0; i < allRooms.length; i++) {
        if (allRooms[i][3] == "public") {
            let roomDiv = document.createElement("div");
            roomDiv.classList.add("room");
            for (let j = 0; j < allRooms[i].length - 1; j++) {
                let text = document.createElement("p");
                text.classList.add("room-text");
                text.innerHTML = allRooms[i][j];
                roomDiv.appendChild(text);
            }
            roomDiv.addEventListener("click", selectRoom);
            document.getElementById("avail-rooms").appendChild(roomDiv);
        }
    }
});
sock.on("room-created", (roomCode, priv) => {
    console.log(roomCode, priv);
    code = roomCode;
    document.getElementById("room-popup").style.display = "none";
    swap("room", "player-select");
});

function selectRoom(e) {
    var el;
    if (e.target.classList[0] == "room") {
        el = e.target;
    } else {
        el = e.target.parentElement;
    }
    if (selected != "") {
        selected.style.border = "1px solid white";
    }
    selected = el;
    el.style.border = "1px solid black";
}
function joinRoom () {
    console.log(selected.firstChild.innerHTML);
    sock.emit("room-req", selected.firstChild.innerHTML, "find");
}
function createRoom() {
    sock.emit("create-room", document.getElementById("private").checked);
} 