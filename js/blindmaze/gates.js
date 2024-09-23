//toggle the blue gates
function bluegate() {
    //get the image src
    var bluelever = document.getElementById("blueleverimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //switch image
    if (gates.contains("blueon")) {
        bluelever.src = "./source/blindmaze/lever_blueoff.png";
    } else {
        bluelever.src = "./source/blindmaze/lever_blueon.png";
    };
    //toggle blue gate
    gates.toggle("blueoff");
    gates.toggle("blueon");
    console.log("switch blue");
}

//toggle the green gates
function greengate() {
    //get the image src
    var greenlever = document.getElementById("greenleverimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //switch image
    if (gates.contains("greenon")) {
        greenlever.src = "./source/blindmaze/lever_greenoff.png";
    } else {
        greenlever.src = "./source/blindmaze/lever_greenon.png";
    };
    //toggle blue gate
    gates.toggle("greenoff");
    gates.toggle("greenon");
    console.log("switch green");
}

//toggle the red gates
function redgate() {
    //get the image src
    var redlever = document.getElementById("redleverimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //switch image
    if (gates.contains("redon")) {
        redlever.src = "./source/blindmaze/lever_redoff.png";
    } else {
        redlever.src = "./source/blindmaze/lever_redon.png";
    };
    //toggle blue gate
    gates.toggle("redoff");
    gates.toggle("redon");
    console.log("switch red");
}