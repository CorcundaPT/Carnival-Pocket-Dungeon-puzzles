//this will move a camara one to up
function moveup() {
    //get the image src
    var mapimage = document.getElementById("mapimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //get the current position on the map
    var currentposition = document.getElementById("mapview");
    switch (currentposition.getAttribute("name")) {
        case "A3":
            visibleleverandgates("A2");
            break;
        case "A4":
            if (gates.contains("blueon")) {
                visibleleverandgates("A3");
            } else {
                closegate();
            };
            break;
        case "A5":
            visibleleverandgates("A4");
            break;
        case "B3":
            if (gates.contains("greenoff")) {
                visibleleverandgates("B2");
            } else {
                closegate();
            };
            break;
        case "B5":
            if (gates.contains("blueoff")) {
                visibleleverandgates("B4");
            } else {
                closegate();
            };
            break;
        case "B6":
            visibleleverandgates("B5");
            break;
        case "C2":
            if (gates.contains("redon")) {
                visibleleverandgates("C1");
            } else {
                closegate();
            };
            break;
        case "C4":
            visibleleverandgates("C3");
            break;
        case "D3":
            if (gates.contains("redoff")) {
                visibleleverandgates("D2");
            } else {
                closegate();
            };
            break;
        case "D5":
            if (gates.contains("greenon")) {
                visibleleverandgates("D4");
            } else {
                closegate();
            };
            break;
        case "E3":
            visibleleverandgates("E2");
            break;
        case "E5":
            if (gates.contains("blueon")) {
                visibleleverandgates("E4");
            } else {
                closegate();
            };
            break;
        default:
            nomove();
    }
}

//this will move the camare one to left
function moveleft() {
    //get the image src
    var mapimage = document.getElementById("mapimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //get the current position on the map
    var currentposition = document.getElementById("mapview");
    switch (currentposition.getAttribute("name")) {
        case "B3":
            visibleleverandgates("A3");
            break;
        case "B5":
            visibleleverandgates("A5");
            break;
        case "C2":
            visibleleverandgates("B2");
            break;
        case "C4":
            visibleleverandgates("B4");
            break;
        case "C5":
            visibleleverandgates("B5");
            break;
        case "D2":
            visibleleverandgates("C2");
            break;
        case "D3":
            visibleleverandgates("C3");
            break;
        case "D4":
            visibleleverandgates("C4");
            break;
        case "E3":
            visibleleverandgates("D3");
            break;
        case "E4":
            if (gates.contains("greenoff")) {
                visibleleverandgates("D4");
            } else {
                closegate();
            };
            break;
        default:
            nomove();
    }
}

//this will move the camare one to right
function moveright() {
    //get the image src
    var mapimage = document.getElementById("mapimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //get the current position on the map
    var currentposition = document.getElementById("mapview");
    switch (currentposition.getAttribute("name")) {
        case "A3":
            visibleleverandgates("B3");
            break;
        case "A5":
            visibleleverandgates("B5");
            break;
        case "B2":
            visibleleverandgates("C2");
            break;
        case "B4":
            visibleleverandgates("C4");
            break;
        case "B5":
            visibleleverandgates("C5");
            break;
        case "C2":
            visibleleverandgates("D2");
            break;
        case "C3":
            visibleleverandgates("D3");
            break;
        case "C4":
            visibleleverandgates("D4");
            break;
        case "D3":
            visibleleverandgates("E3");
            break;
        case "D4":
            if (gates.contains("greenoff")) {
                visibleleverandgates("E4");
            } else {
                closegate();
            };
            break;
        default:
            nomove();
    }
}

//this will move a camara one to down
function movedown() {
    //get the image src
    var mapimage = document.getElementById("mapimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //get the current position on the map
    var currentposition = document.getElementById("mapview");
    switch (currentposition.getAttribute("name")) {
        case "A2":
            visibleleverandgates("A3");
            break;
        case "A3":
            if (gates.contains("blueon")) {
                visibleleverandgates("A4");
            } else {
                closegate();
            };
            break;
        case "A4":
            visibleleverandgates("A5");
            break;
        case "B2":
            if (gates.contains("greenoff")) {
                visibleleverandgates("B3");
            } else {
                closegate();
            };
            break;
        case "B4":
            if (gates.contains("blueoff")) {
                visibleleverandgates("B5");
            } else {
                closegate();
            };
            break;
        case "B5":
            visibleleverandgates("B6");
            break;
        case "C1":
            if (gates.contains("redon")) {
                visibleleverandgates("C2");
            } else {
                closegate();
            };
            break;
        case "C3":
            visibleleverandgates("C4");
            break;
        case "D2":
            if (gates.contains("redoff")) {
                visibleleverandgates("D3");
            } else {
                closegate();
            };
            break;
        case "D4":
            if (gates.contains("greenon")) {
                visibleleverandgates("D5");
            } else {
                closegate();
            };
            break;
        case "E2":
            visibleleverandgates("E3");
            break;
        case "E4":
            if (gates.contains("blueon")) {
                visibleleverandgates("E5");
            } else {
                closegate();
            };
            break;
        default:
            nomove();
    }
}

function visibleleverandgates(targetroom) {
    //get the image src
    var mapimage = document.getElementById("mapimage");
    //get the gate status
    var gates = document.getElementById("mapview").classList;
    //get the current position on the map
    var currentposition = document.getElementById("mapview");
    switch (targetroom){
        case "A2":
            mapimage.src = "./source/maze_A2.jpg";
            currentposition.setAttribute("name", "A2");
            console.log("go to A2");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "A3":
            mapimage.src = "./source/maze_A3.jpg";
            currentposition.setAttribute("name", "A3");
            console.log("go to A3");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="block";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueoff")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(0deg)";
            }
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "A4":
            mapimage.src = "./source/maze_A4.jpg";
            currentposition.setAttribute("name", "A4");
            console.log("go to A4");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueoff")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("bluegate").style.display="none";
            }
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "A5":
            mapimage.src = "./source/maze_A5.jpg";
            currentposition.setAttribute("name", "A5");
            console.log("go to A5");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "B2":
            mapimage.src = "./source/maze_B2.jpg";
            currentposition.setAttribute("name", "B2");
            console.log("go to B2");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gate visible
            document.getElementById("bluegate").style.display="none";
            if (gates.contains("greenon")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("greengate").style.display="none";
            }
            document.getElementById("redgate").style.display="none";
            break;
        case "B3":
            mapimage.src = "./source/maze_B3.jpg";
            currentposition.setAttribute("name", "B3");
            console.log("go to B3");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            if (gates.contains("greenon")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("greengate").style.display="none";
            }
            document.getElementById("redgate").style.display="none";
            
            break;
        case "B4":
            mapimage.src = "./source/maze_B4.jpg";
            currentposition.setAttribute("name", "B4");
            console.log("go to B4");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueon")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("bluegate").style.display="none";
            }
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "B5":
            mapimage.src = "./source/maze_B5.jpg";
            currentposition.setAttribute("name", "B5");
            console.log("go to B5");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueon")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("bluegate").style.display="none";
            }
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "B6":
            mapimage.src = "./source/maze_B6.jpg";
            currentposition.setAttribute("name", "B6");
            console.log("go to B6");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "C1":
            mapimage.src = "./source/maze_C1.jpg";
            currentposition.setAttribute("name", "C1");
            console.log("go to C1");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            if (gates.contains("redoff")) {
                document.getElementById("redgate").style.display="block";
                document.getElementById("redgate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("redgate").style.display="none";
            }
            break;
        case "C2":
            mapimage.src = "./source/maze_C2.jpg";
            currentposition.setAttribute("name", "C2");
            console.log("go to C2");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            if (gates.contains("redoff")) {
                document.getElementById("redgate").style.display="block";
                document.getElementById("redgate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("redgate").style.display="none";
            }
            break;
        case "C3":
            mapimage.src = "./source/maze_C3.jpg";
            currentposition.setAttribute("name", "C3");
            console.log("go to C3");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "C4":
            mapimage.src = "./source/maze_C4.jpg";
            currentposition.setAttribute("name", "C4");
            console.log("go to C4");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "C5":
            mapimage.src = "./source/maze_C5.jpg";
            currentposition.setAttribute("name", "C5");
            console.log("go to C5");
            //lever visible
            document.getElementById("bluelever").style.display="block";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "D2":
            mapimage.src = "./source/maze_D2.jpg";
            currentposition.setAttribute("name", "D2");
            console.log("go to D2");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            if (gates.contains("redon")) {
                document.getElementById("redgate").style.display="block";
                document.getElementById("redgate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("redgate").style.display="none";
            }
            break;
        case "D3":
            mapimage.src = "./source/maze_D3.jpg";
            currentposition.setAttribute("name", "D3");
            console.log("go to D3");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            if (gates.contains("redon")) {
                document.getElementById("redgate").style.display="block";
                document.getElementById("redgate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("redgate").style.display="none";
            }
            break;
        case "D4":
            mapimage.src = "./source/maze_D4.jpg";
            currentposition.setAttribute("name", "D4");
            console.log("go to D4");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            if (gates.contains("greenon")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(-90deg)";
            } else if (gates.contains("greenoff")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("greengate").style.display="none";
            }
            document.getElementById("redgate").style.display="none";
            break;
        case "D5":
            mapimage.src = "./source/maze_D5.jpg";
            currentposition.setAttribute("name", "D5");
            console.log("go to D5");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="block";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            if (gates.contains("greenoff")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("greengate").style.display="none";
            }
            document.getElementById("redgate").style.display="none";
            break;
        case "E2":
            mapimage.src = "./source/maze_E2.jpg";
            currentposition.setAttribute("name", "E2");
            console.log("go to E2");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "E3":
            mapimage.src = "./source/maze_E3.jpg";
            currentposition.setAttribute("name", "E3");
            console.log("go to E3");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            document.getElementById("bluegate").style.display="none";
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
        case "E4":
            mapimage.src = "./source/maze_E4.jpg";
            currentposition.setAttribute("name", "E4");
            console.log("go to E4");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueoff")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(0deg)";
            } else {
                document.getElementById("bluegate").style.display="none";
            }
            if (gates.contains("greenon")) {
                document.getElementById("greengate").style.display="block";
                document.getElementById("greengate").style.transform="rotate(90deg)";
            } else {
                document.getElementById("greengate").style.display="none";
            }
            document.getElementById("redgate").style.display="none";
            break;
        case "E5":
            mapimage.src = "./source/maze_E5.jpg";
            currentposition.setAttribute("name", "E5");
            console.log("go to E5");
            //lever visible
            document.getElementById("bluelever").style.display="none";
            document.getElementById("greenlever").style.display="none";
            document.getElementById("redlever").style.display="none";
            //gates visible
            if (gates.contains("blueoff")) {
                document.getElementById("bluegate").style.display="block";
                document.getElementById("bluegate").style.transform="rotate(180deg)";
            } else {
                document.getElementById("bluegate").style.display="none";
            }
            document.getElementById("greengate").style.display="none";
            document.getElementById("redgate").style.display="none";
            break;
    }
}

function nomove() {
    console.log("No move available");
}
function closegate() {
    console.log("The gate is closed");
}