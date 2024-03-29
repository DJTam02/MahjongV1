
function resize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    h = 52;
    if (height < width - 400) {
        for (var i = 12; i >= 0; i--) {
            if (height >= i * 86) {
                break;
            } else {
                h -= 4;
            }
        }
        w = (h * 3) / 4;
        x = (height - (18 * w) - (4 * h)) / 2;
        y = (width - (18 * w) - (4 * h)) / 2;
        document.getElementById("full").style.width = (width - (h / 2)) + "px";
        document.getElementById("full").style.height = ((18 * w) + (8 * h) + (2 * x)) + "px";
    } else {
        for (var i = 12; i >= 0; i--) {
            if (width >= i * 86) {
                break;
            } else {
                h -= 4;
            }
        }
        w = (h * 3) / 4;
        x = ((width - (18 * w) - (4 * h)) / 2) - (h / 4);
        y = 228;
        document.getElementById("square").style.marginLeft = y + "px";
        document.getElementById("square").style.marginRight = y + "px";

        document.getElementById("full").style.width = ((18 * w) + (4 * h) + (2 * x) + (2 * y)) + "px";
        document.getElementById("full").style.height = ((18 * w) + (8 * h) + (2 * x)) + "px";
    }
    vert = document.getElementsByClassName("tile-vert");
    for (var i = 0; i < vert.length; i++) {
        vert[i].style.width = w + "px";
        vert[i].style.height = h + "px";
        vert[i].style.fontSize = h + "px";
    }
    horiz = document.getElementsByClassName("tile-horiz");
    for (var i = 0; i < horiz.length; i++) {
        horiz[i].style.width = w + "px";
        horiz[i].style.height = h + "px";
        horiz[i].style.fontSize = h + "px";
    }
    var leftDraw = document.getElementById("draw3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftDraw.length; i++) {
        let transformValue = -(-w + (i * (h - w)));
        leftDraw[i].style.transform = "rotate(90deg) translate(" + transformValue + "px)";
    }
    var rightDraw = document.getElementById("draw1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightDraw.length; i++) {
        let transformValue = (-w + (i * (h - w)));
        rightDraw[i].style.transform = "rotate(270deg) translate(" + transformValue + "px)";
    }
    var rightHand = document.getElementById("hand1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightHand.length; i++) {
        let transformValue = (-w + (i * (h - w)));
        rightHand[i].style.transform = "rotate(270deg) translate(" + transformValue + "px)";
    }
    var leftHand = document.getElementById("hand3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftHand.length; i++) {
        let transformValue = -(-w + (i * (h - w)));
        leftHand[i].style.transform = "rotate(90deg) translate(" + transformValue + "px)";
    }
    var leftFin = document.getElementById("fin3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftFin.length; i++) {
        let transformValue = -(-w + (i * (h - w)));
        leftFin[i].style.transform = "rotate(90deg) translate(" + transformValue + "px)";
    }
    var leftFlower = document.getElementById("flower3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftFlower.length; i++) {
        let transformValue = -(-w + (i * (h - w)));
        leftFlower[i].style.transform = "rotate(90deg) translate(" + transformValue + "px)";
    }
    var rightFin = document.getElementById("fin1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightFin.length; i++) {
        let transformValue = -((h + w) - (i * (h - w)));
        rightFin[i].style.transform = "rotate(270deg) translate(" + transformValue + "px)";
    }
    var rightFlower = document.getElementById("flower1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightFlower.length; i++) {
        let transformValue = -((h + w) - (i * (h - w)));
        rightFlower[i].style.transform = "rotate(270deg) translate(" + transformValue + "px)";
    }
    //Text
    text = document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
        text[i].style.fontSize = (w / 1.5) + "px";
    }
    //Top left
    document.getElementById("top-left").style.width = ((5 * h) + (2 * x)) + "px";
    document.getElementById("top-left").style.height = (22 * w) + "px";

    document.getElementById("left-flower-and-fin").style.width = h + "px";
    document.getElementById("left-flower-and-fin").style.height = (22 * w) + "px";

    document.getElementById("flower3").style.width = h + "px";
    document.getElementById("flower3").style.height = (w * 8) + "px";
    document.getElementById("fin3").style.width = h + "px";
    document.getElementById("fin3").style.height = (w * 14) + "px";

    document.getElementById("compass").style.marginLeft = (x - h) + "px";
    if ((4 * h) + x < y - h) {
        document.getElementById("top-left").style.width = ((5 * h) + (2 * x)) + "px";
        document.getElementById("compass").style.width = ((4 * h) + x) + "px";
        document.getElementById("compass").style.height = ((4 * h) + x) + "px";

        document.getElementById("bot-right").style.width = ((3 * h) + (3 * x)) + "px";
        document.getElementById("info").style.width = (y - (3 * x)) + "px";
        document.getElementById("info").style.height = ((4 * h)) + "px";
    } else {
        document.getElementById("top-left").style.width = (y + x) + "px";
        document.getElementById("compass").style.width = (y - h) + "px";
        document.getElementById("compass").style.height = (y - h) + "px";

        document.getElementById("bot-right").style.width = (y + x - h) + "px";
        document.getElementById("info").style.width = (y - (2 * h)) + "px";
        document.getElementById("info").style.height = (y - h) + "px";
    }
    //Top right
    document.getElementById("top-right").style.width = (22 * w) + "px";
    document.getElementById("top-right").style.height = ((4 * h) + x) + "px";

    document.getElementById("top-flower-and-fin").style.width = (22 * w) + "px";
    document.getElementById("top-flower-and-fin").style.height = h + "px";

    document.getElementById("fin2").style.height = h + "px";
    document.getElementById("flower2").style.height = h + "px";

    document.getElementById("round-wind").style.paddingTop = h + "px";
    document.getElementById("round-wind").style.width = (y - x) + "px";
    document.getElementById("round-wind").style.height = ((2 * h) + x) + "px";


    //Bot left
    document.getElementById("entire-bottom-row").style.height = (9 * h) + "px";
    document.getElementById("finished-sections").style.left = (23 * w) + "px";
    document.getElementById("finished-sections").style.width = (10 * w) + "px";
    document.getElementById("finished-sections").style.marginTop = h + "px";
    let playerSets = document.getElementById("finished-sections").getElementsByClassName("playerSets");
    for (let i = 0; i < playerSets.length; i++) {
        playerSets[i].style.width = (5 * w) + "px";
    }

    document.getElementById("playerFinished0").style.width = (4 * w) + "px";
    document.getElementById("playerFinished0").style.height = (h * 1.5) + "px";
    document.getElementById("playerFinished0").style.paddingRight = (w / 2) + "px";
    document.getElementById("playerFinished0").style.paddingBottom = (h / 4) + "px";

    document.getElementById("playerFinished1").style.width = (4 * w) + "px";
    document.getElementById("playerFinished1").style.height = (h * 1.5) + "px";
    document.getElementById("playerFinished1").style.paddingRight = (w / 2) + "px";
    document.getElementById("playerFinished1").style.paddingBottom = (h / 4) + "px";

    document.getElementById("playerFinished2").style.width = (4 * w) + "px";
    document.getElementById("playerFinished2").style.height = (h * 1.5) + "px";
    document.getElementById("playerFinished2").style.paddingRight = (w / 2) + "px";
    document.getElementById("playerFinished2").style.paddingBottom = (h / 4) + "px";

    document.getElementById("playerFinished3").style.width = (4 * w) + "px";
    document.getElementById("playerFinished3").style.height = (h * 1.5) + "px";
    document.getElementById("playerFinished3").style.paddingRight = (w / 2) + "px";
    document.getElementById("playerFinished3").style.paddingBottom = (h / 4) + "px";

    document.getElementById("bot-left").style.width = (y - h) + "px";
    document.getElementById("bot-left").style.height = (7 * h) + "px";

    document.getElementById("score").style.marginBottom = h + "px";
    document.getElementById("score").style.width = (y - h) + "px";
    document.getElementById("score").style.minHeight = ((h * 2) + x) + "px";

    document.getElementById("bot-flower-and-fin").style.width = (22 * w) + "px";
    document.getElementById("bot-flower-and-fin").style.height = h + "px";

    document.getElementById("flower0").style.height = h + "px";
    document.getElementById("fin0").style.height = h + "px";


    //Bot right
    document.getElementById("bot-right").style.height = (22 * w) + "px";
    
    document.getElementById("info").style.margin = "auto";
    document.getElementById("info").style.right = (x + w) + "px";

    document.getElementById("right-flower-and-fin").style.width = h + "px";
    document.getElementById("right-flower-and-fin").style.height = (22 * w) + "px";

    document.getElementById("fin1").style.width = h + "px";
    document.getElementById("fin1").style.height = (w * 14) + "px";
    document.getElementById("flower1").style.width = h + "px";
    document.getElementById("flower1").style.height = (w * 8) + "px";



    //Square
    document.getElementById("square").style.margin = "auto";
    document.getElementById("square").style.marginBottom = (2 * h) + "px";
    document.getElementById("square").style.marginTop = (2 * h) + "px";
    document.getElementById("square").style.width = ((18 * w) + (4 * h) + (2 * x)) + "px";
    document.getElementById("square").style.height = ((18 * w) + (4 * h) + (2 * x)) + "px";


    //Hands
    document.getElementById("hand2").style.marginLeft = -(7 * w) + "px";
    document.getElementById("hand2").style.width = (14 * w) + "px";
    document.getElementById("hand2").style.height = h + "px";


    document.getElementById("hand3").style.marginTop = -(7 * w) + "px";
    document.getElementById("hand3").style.width = h + "px";
    document.getElementById("hand3").style.height = (14 * w) + "px";


    document.getElementById("hand1").style.marginTop = -(7 * w) + "px";
    document.getElementById("hand1").style.width = h + "px";
    document.getElementById("hand1").style.height = (14 * w) + "px";


    document.getElementById("hand0").style.marginLeft = -(7 * w) + "px";
    document.getElementById("hand0").style.width = ((16 * w) + (2 * h) + x) + "px";
    document.getElementById("hand0").style.height = h + "px";


    //Draws
    document.getElementById("draw").style.width = ((18 * w) + (2 * h)) + "px";
    document.getElementById("draw").style.height = ((18 * w) + (2 * h)) + "px";
    document.getElementById("draw").style.top = (x + h) + "px";
    document.getElementById("draw").style.margin = "auto";


    document.getElementById("draw2").style.marginLeft = (-9 * w) + "px";
    document.getElementById("draw2").style.width = (18 * w) + "px";
    document.getElementById("draw2").style.height = h + "px";

    document.getElementById("draw3").style.marginTop = -(9 * w) + "px";
    document.getElementById("draw3").style.height = (18 * w) + "px";
    document.getElementById("draw3").style.width = h + "px";

    document.getElementById("draw1").style.marginTop = -(9 * w) + "px";
    document.getElementById("draw1").style.height = (18 * w) + "px";
    document.getElementById("draw1").style.width = h + "px";

    document.getElementById("draw0").style.marginLeft = -(9 * w) + "px";
    document.getElementById("draw0").style.width = (18 * w) + "px";
    document.getElementById("draw0").style.height = h + "px";


    document.getElementById("mid").style.width = (18 * w) + "px";
    document.getElementById("mid").style.height = (18 * w) + "px";
    document.getElementById("mid").style.paddingTop = ((((18 * w) - (8 * h)) / 2 + h) / 2) + "px";
    document.getElementById("mid").style.paddingBottom = (((18 * w) - (8 * h)) / 2) + "px";
    document.getElementById("mid").style.paddingLeft = ((6 * w) / 2) + "px";
    document.getElementById("mid").style.paddingLeft = ((6 * w) / 2) + "px";
    document.getElementById("mid").style.margin = "auto";

    if (document.getElementById("button")) {
        document.getElementById("button").style.marginLeft = (2 * w) + "px";
        document.getElementById("button").style.width = ((2 * h) + x) + "px";
        document.getElementById("button").style.height = h + "px";
    }

    var handTiles = document.getElementById("hand0").getElementsByClassName("tile-vert");
    for (let i = 0; i < handTiles.length; i++) {
        handTiles[i].style.fontSize = h + "px";
    }

    document.getElementById("p1-score").innerHTML = h;
    document.getElementById("p2-score").innerHTML = w;
    document.getElementById("p3-score").innerHTML = x;
    document.getElementById("p4-score").innerHTML = y;
    if (document.getElementsByClassName("dice")) {
        var dice = document.getElementsByClassName("dice");
        for (var i = 0; i < dice.length; i++) {
            dice[i].style.width = (w * 3) + "px";
            dice[i].style.height = (w * 3) + "px";
        }
    }
}
function invis() {
    var topHand = document.getElementById("hand2").getElementsByClassName("tile-vert");
    for (let i = 0; i < topHand.length; i++) {
        topHand[i].style.opacity = "0%";
    }
    var leftHand = document.getElementById("hand3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftHand.length; i++) {
        leftHand[i].style.opacity = "0%";
    }
    var rightHand = document.getElementById("hand1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightHand.length; i++) {
        rightHand[i].style.opacity = "0%";
    }
    var botHand = document.getElementById("hand0").getElementsByClassName("tile-vert");
    for (let i = 0; i < botHand.length; i++) {
        botHand[i].style.opacity = "0%";
    }
    var rightFin = document.getElementById("fin1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightFin.length; i++) {
        rightFin[i].style.opacity = "0%";
    }
    var leftFin = document.getElementById("fin3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftFin.length; i++) {
        leftFin[i].style.opacity = "0%";
    }
    var topFin = document.getElementById("fin2").getElementsByClassName("tile-vert");
    for (let i = 0; i < topFin.length; i++) {
        topFin[i].style.opacity = "0%";
    }
    var botFin = document.getElementById("fin0").getElementsByClassName("tile-vert");
    for (let i = 0; i < botFin.length; i++) {
        botFin[i].style.opacity = "0%";
    }
    var topFlower = document.getElementById("flower2").getElementsByClassName("tile-vert");
    for (let i = 0; i < topFlower.length; i++) {
        topFlower[i].style.opacity = "0%";
    }
    var botFlower = document.getElementById("flower0").getElementsByClassName("tile-vert");
    for (let i = 0; i < botFlower.length; i++) {
        botFlower[i].style.opacity = "0%";
    }
    var leftFlower = document.getElementById("flower3").getElementsByClassName("tile-horiz");
    for (let i = 0; i < leftFlower.length; i++) {
        leftFlower[i].style.opacity = "0%";
    }
    var rightFlower = document.getElementById("flower1").getElementsByClassName("tile-horiz");
    for (let i = 0; i < rightFlower.length; i++) {
        rightFlower[i].style.opacity = "0%";
    }
}
function swap(from, to) {
    document.getElementById(from).style.display = "none";
    document.getElementById(to).style.display = "block";
    document.getElementById("back").style.display = "inline-block";
    current = to;
    if (current == "find") {
        sock.emit("get-rooms");
    }
}
function back() {
    document.getElementById(current).style.display = "none";
    if (current == "how-to-play" || current == "room") {
        document.getElementById("back").style.display = "none";
        current = "start";
    } else if (current == "create-room" || current == "find") {
        document.getElementById("avail-rooms").innerHTML = '<div class="room"><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Room Code</div><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Room State</div><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Number of Players</div></div>';
        current = "room";
    } else if (current == "player-select" || current == "game") {
        var res = confirm("Are you sure you want to leave?\nYou will leave this session.");
        if (res) {
            current = "room"; 
            sock.emit("room-disconnect", playerNum);
            playerSelectReset();
            playerNum = 0;
            code = "";
            document.getElementById("avail-rooms").innerHTML = '<div class="room"><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Room Code</div><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Room State</div><div class="room-text" style="margin-top: 0px; margin-bottom: 0px;">Number of Players</div></div>';
        }
    }
    console.log(current);
    document.getElementById(current).style.display = "block";
}