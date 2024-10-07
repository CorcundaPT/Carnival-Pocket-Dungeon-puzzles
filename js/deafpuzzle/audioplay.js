const delaytime = 400;

//play any crystal
function playcrystal(number) {
    var crystal = document.getElementById('audiocrystal'+number);
    if (crystal.paused) {
        crystal.play();
    } else {
        crystal.currentTime = 0;
    }
}

//play part 1
function playpart1() {
    var audio = document.getElementById('audiopart1');
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

//play part2
function playpart2() {
    var audio = document.getElementById('audiopart2');
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

//delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//play line a1
async function playlinea1() {
    //get the correct crystal
    var numbera11 = document.getElementById('a11').value;
    var crystala11 = document.getElementById('audiocrystal'+numbera11);

    var numbera12 = document.getElementById('a12').value;
    var crystala12 = document.getElementById('audiocrystal'+numbera12);
    
    var numbera13 = document.getElementById('a13').value;
    var crystala13 = document.getElementById('audiocrystal'+numbera13);
    
    var numbera14 = document.getElementById('a14').value;
    var crystala14 = document.getElementById('audiocrystal'+numbera14);
    
    var numbera15 = document.getElementById('a15').value;
    var crystala15 = document.getElementById('audiocrystal'+numbera15);
    
    var numbera16 = document.getElementById('a16').value;
    var crystala16 = document.getElementById('audiocrystal'+numbera16);
    
    var numbera17 = document.getElementById('a17').value;
    var crystala17 = document.getElementById('audiocrystal'+numbera17);

    //play the line
    crystala11.currentTime = 0;
    crystala11.play();
    await delay(delaytime);
    crystala12.currentTime = 0;
    crystala12.play();
    await delay(delaytime);
    crystala13.currentTime = 0;
    crystala13.play();
    await delay(delaytime);
    crystala14.currentTime = 0;
    crystala14.play();
    await delay(delaytime);
    crystala15.currentTime = 0;
    crystala15.play();
    await delay(delaytime);
    crystala16.currentTime = 0;
    crystala16.play();
    await delay(delaytime);
    crystala17.currentTime = 0;
    crystala17.play();
}

//play line a2
async function playlinea2() {
    //get the correct crystal
    var numbera21 = document.getElementById('a21').value;
    var crystala21 = document.getElementById('audiocrystal'+numbera21);

    var numbera22 = document.getElementById('a22').value;
    var crystala22 = document.getElementById('audiocrystal'+numbera22);
    
    var numbera23 = document.getElementById('a23').value;
    var crystala23 = document.getElementById('audiocrystal'+numbera23);
    
    var numbera24 = document.getElementById('a24').value;
    var crystala24 = document.getElementById('audiocrystal'+numbera24);
    
    var numbera25 = document.getElementById('a25').value;
    var crystala25 = document.getElementById('audiocrystal'+numbera25);
    
    var numbera26 = document.getElementById('a26').value;
    var crystala26 = document.getElementById('audiocrystal'+numbera26);
    
    var numbera27 = document.getElementById('a27').value;
    var crystala27 = document.getElementById('audiocrystal'+numbera27);
    
    var numbera28 = document.getElementById('a28').value;
    var crystala28 = document.getElementById('audiocrystal'+numbera28);
    
    var numbera29 = document.getElementById('a29').value;
    var crystala29 = document.getElementById('audiocrystal'+numbera29);

    //play the line
    crystala21.currentTime = 0;
    crystala21.play();
    await delay(delaytime);
    crystala22.currentTime = 0;
    crystala22.play();
    await delay(delaytime);
    crystala23.currentTime = 0;
    crystala23.play();
    await delay(delaytime);
    crystala24.currentTime = 0;
    crystala24.play();
    await delay(delaytime);
    crystala25.currentTime = 0;
    crystala25.play();
    await delay(delaytime);
    crystala26.currentTime = 0;
    crystala26.play();
    await delay(delaytime);
    crystala27.currentTime = 0;
    crystala27.play();
    await delay(delaytime);
    crystala28.currentTime = 0;
    crystala28.play();
    await delay(delaytime);
    crystala29.currentTime = 0;
    crystala29.play();
}

//play lina a3
async function playlinea3() {
    //get the correct crystal
    var numbera31 = document.getElementById('a31').value;
    var crystala31 = document.getElementById('audiocrystal'+numbera31);

    var numbera32 = document.getElementById('a32').value;
    var crystala32 = document.getElementById('audiocrystal'+numbera32);
    
    var numbera33 = document.getElementById('a33').value;
    var crystala33 = document.getElementById('audiocrystal'+numbera33);
    
    var numbera34 = document.getElementById('a34').value;
    var crystala34 = document.getElementById('audiocrystal'+numbera34);
    
    var numbera35 = document.getElementById('a35').value;
    var crystala35 = document.getElementById('audiocrystal'+numbera35);
    
    var numbera36 = document.getElementById('a36').value;
    var crystala36 = document.getElementById('audiocrystal'+numbera36);
    
    var numbera37 = document.getElementById('a37').value;
    var crystala37 = document.getElementById('audiocrystal'+numbera37);
    
    var numbera38 = document.getElementById('a38').value;
    var crystala38 = document.getElementById('audiocrystal'+numbera38);
    
    var numbera39 = document.getElementById('a39').value;
    var crystala39 = document.getElementById('audiocrystal'+numbera39);

    //play the line
    crystala31.currentTime = 0;
    crystala31.play();
    await delay(delaytime);
    crystala32.currentTime = 0;
    crystala32.play();
    await delay(delaytime);
    crystala33.currentTime = 0;
    crystala33.play();
    await delay(delaytime);
    crystala34.currentTime = 0;
    crystala34.play();
    await delay(delaytime);
    crystala35.currentTime = 0;
    crystala35.play();
    await delay(delaytime);
    crystala36.currentTime = 0;
    crystala36.play();
    await delay(delaytime);
    crystala37.currentTime = 0;
    crystala37.play();
    await delay(delaytime);
    crystala38.currentTime = 0;
    crystala38.play();
    await delay(delaytime);
    crystala39.currentTime = 0;
    crystala39.play();
}

//play lina a4
async function playlinea4() {
    //get the correct crystal
    var numbera41 = document.getElementById('a41').value;
    var crystala41 = document.getElementById('audiocrystal'+numbera41);

    var numbera42 = document.getElementById('a42').value;
    var crystala42 = document.getElementById('audiocrystal'+numbera42);
    
    var numbera43 = document.getElementById('a43').value;
    var crystala43 = document.getElementById('audiocrystal'+numbera43);

    //play the line
    crystala41.currentTime = 0;
    crystala41.play();
    await delay(delaytime);
    crystala42.currentTime = 0;
    crystala42.play();
    await delay(delaytime);
    crystala43.currentTime = 0;
    crystala43.play();
}

//play all A
async function playalla() {
    console.log('test');
    playlinea1();
    await delay(delaytime*(7));
    playlinea2();
    await delay(delaytime*(9));
    playlinea3();
    await delay(delaytime*(9)),
    playlinea4();
}

//play line b1
async function playlineb1() {
    //get the correct crystal
    var numberb11 = document.getElementById('b11').value;
    var crystalb11 = document.getElementById('audiocrystal'+numberb11);

    var numberb12 = document.getElementById('b12').value;
    var crystalb12 = document.getElementById('audiocrystal'+numberb12);
    
    var numberb13 = document.getElementById('b13').value;
    var crystalb13 = document.getElementById('audiocrystal'+numberb13);
    
    var numberb14 = document.getElementById('b14').value;
    var crystalb14 = document.getElementById('audiocrystal'+numberb14);
    
    var numberb15 = document.getElementById('b15').value;
    var crystalb15 = document.getElementById('audiocrystal'+numberb15);
    
    var numberb16 = document.getElementById('b16').value;
    var crystalb16 = document.getElementById('audiocrystal'+numberb16);
    
    var numberb17 = document.getElementById('b17').value;
    var crystalb17 = document.getElementById('audiocrystal'+numberb17);

    //play the line
    crystalb11.currentTime = 0;
    crystalb11.play();
    await delay(delaytime);
    crystalb12.currentTime = 0;
    crystalb12.play();
    await delay(delaytime);
    crystalb13.currentTime = 0;
    crystalb13.play();
    await delay(delaytime);
    crystalb14.currentTime = 0;
    crystalb14.play();
    await delay(delaytime);
    crystalb15.currentTime = 0;
    crystalb15.play();
    await delay(delaytime);
    crystalb16.currentTime = 0;
    crystalb16.play();
    await delay(delaytime);
    crystalb17.currentTime = 0;
    crystalb17.play();
}

//play line b2
async function playlineb2() {
    //get the correct crystal
    var numberb21 = document.getElementById('b21').value;
    var crystalb21 = document.getElementById('audiocrystal'+numberb21);

    var numberb22 = document.getElementById('b22').value;
    var crystalb22 = document.getElementById('audiocrystal'+numberb22);
    
    var numberb23 = document.getElementById('b23').value;
    var crystalb23 = document.getElementById('audiocrystal'+numberb23);
    
    var numberb24 = document.getElementById('b24').value;
    var crystalb24 = document.getElementById('audiocrystal'+numberb24);
    
    var numberb25 = document.getElementById('b25').value;
    var crystalb25 = document.getElementById('audiocrystal'+numberb25);
    
    var numberb26 = document.getElementById('b26').value;
    var crystalb26 = document.getElementById('audiocrystal'+numberb26);
    
    var numberb27 = document.getElementById('b27').value;
    var crystalb27 = document.getElementById('audiocrystal'+numberb27);
    
    var numberb28 = document.getElementById('b28').value;
    var crystalb28 = document.getElementById('audiocrystal'+numberb28);
    
    var numberb29 = document.getElementById('b29').value;
    var crystalb29 = document.getElementById('audiocrystal'+numberb29);

    //play the line
    crystalb21.currentTime = 0;
    crystalb21.play();
    await delay(delaytime);
    crystalb22.currentTime = 0;
    crystalb22.play();
    await delay(delaytime);
    crystalb23.currentTime = 0;
    crystalb23.play();
    await delay(delaytime);
    crystalb24.currentTime = 0;
    crystalb24.play();
    await delay(delaytime);
    crystalb25.currentTime = 0;
    crystalb25.play();
    await delay(delaytime);
    crystalb26.currentTime = 0;
    crystalb26.play();
    await delay(delaytime);
    crystalb27.currentTime = 0;
    crystalb27.play();
    await delay(delaytime);
    crystalb28.currentTime = 0;
    crystalb28.play();
    await delay(delaytime);
    crystalb29.currentTime = 0;
    crystalb29.play();
}

//play lina b3
async function playlineb3() {
    //get the correct crystal
    var numberb31 = document.getElementById('b31').value;
    var crystalb31 = document.getElementById('audiocrystal'+numberb31);

    var numberb32 = document.getElementById('b32').value;
    var crystalb32 = document.getElementById('audiocrystal'+numberb32);
    
    var numberb33 = document.getElementById('b33').value;
    var crystalb33 = document.getElementById('audiocrystal'+numberb33);
    
    var numberb34 = document.getElementById('b34').value;
    var crystalb34 = document.getElementById('audiocrystal'+numberb34);
    
    var numberb35 = document.getElementById('b35').value;
    var crystalb35 = document.getElementById('audiocrystal'+numberb35);
    
    var numberb36 = document.getElementById('b36').value;
    var crystalb36 = document.getElementById('audiocrystal'+numberb36);
    
    var numberb37 = document.getElementById('b37').value;
    var crystalb37 = document.getElementById('audiocrystal'+numberb37);
    
    var numberb38 = document.getElementById('b38').value;
    var crystalb38 = document.getElementById('audiocrystal'+numberb38);
    
    var numberb39 = document.getElementById('b39').value;
    var crystalb39 = document.getElementById('audiocrystal'+numberb39);

    //play the line
    crystalb31.currentTime = 0;
    crystalb31.play();
    await delay(delaytime);
    crystalb32.currentTime = 0;
    crystalb32.play();
    await delay(delaytime);
    crystalb33.currentTime = 0;
    crystalb33.play();
    await delay(delaytime);
    crystalb34.currentTime = 0;
    crystalb34.play();
    await delay(delaytime);
    crystalb35.currentTime = 0;
    crystalb35.play();
    await delay(delaytime);
    crystalb36.currentTime = 0;
    crystalb36.play();
    await delay(delaytime);
    crystalb37.currentTime = 0;
    crystalb37.play();
    await delay(delaytime);
    crystalb38.currentTime = 0;
    crystalba38.play();
    await delay(delaytime);
    crystalb39.currentTime = 0;
    crystalb39.play();
}

//play lina b4
async function playlineb4() {
    //get the correct crystal
    var numberb41 = document.getElementById('b41').value;
    var crystalb41 = document.getElementById('audiocrystal'+numberb41);

    var numberb42 = document.getElementById('b42').value;
    var crystalb42 = document.getElementById('audiocrystal'+numberb42);
    
    var numberb43 = document.getElementById('b43').value;
    var crystalb43 = document.getElementById('audiocrystal'+numberb43);

    //play the line
    crystalb41.currentTime = 0;
    crystalb41.play();
    await delay(delaytime);
    crystalb42.currentTime = 0;
    crystalb42.play();
    await delay(delaytime);
    crystalb43.currentTime = 0;
    crystalb43.play();
}

//play all B
async function playallb() {
    console.log('test');
    playlineb1();
    await delay(delaytime*(7));
    playlineb2();
    await delay(delaytime*(9));
    playlineb3();
    await delay(delaytime*(9)),
    playlineb4();
}