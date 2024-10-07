const puzzleb1 = ['2','3','4','2','6','6','5'];
const puzzleb2 = ['1','2','3','1','7','3','4','3','2'];
const puzzleb3 = ['2','3','4','2','4','5','3','2','1'];
const puzzleb4 = ['1','5','4'];

function upcrystalb(id) {
    current = document.getElementById(id);
    switch (current.className) {
        case 'crystal1':
            current.classList.remove('crystal1');
            current.classList.add('crystal2');
            current.value = 2;
            break;
        case 'crystal2':
            current.classList.remove('crystal2');
            current.classList.add('crystal3');
            current.value = 3;
            break;
        case 'crystal3':
            current.classList.remove('crystal3');
            current.classList.add('crystal4');
            current.value = 4;
            break;
        case 'crystal4':
            current.classList.remove('crystal4');
            current.classList.add('crystal5');
            current.value = 5;
            break;
        case 'crystal5':
            current.classList.remove('crystal5');
            current.classList.add('crystal6');
            current.value = 6;
            break;
        case 'crystal6':
            current.classList.remove('crystal6');
            current.classList.add('crystal7');
            current.value = 7;
            break;
        case 'crystal7':
            current.classList.remove('crystal7');
            current.classList.add('crystal1');
            current.value = 1;
            break;
        default:
            console.log('crystal error')
    }
    //b1 row
    var b11 = puzzleb1[0] == document.getElementById('b11').value;
    var b12 = puzzleb1[1] == document.getElementById('b12').value;
    var b13 = puzzleb1[2] == document.getElementById('b13').value;
    var b14 = puzzleb1[3] == document.getElementById('b14').value;
    var b15 = puzzleb1[4] == document.getElementById('b15').value;
    var b16 = puzzleb1[5] == document.getElementById('b16').value;
    var b17 = puzzleb1[6] == document.getElementById('b17').value;
    if (b11 && b12 && b13 && b14 && b15 && b16 && b17) {
        document.getElementById('b1').classList.add('correct');
        console.log('b1 correct');
    } else {
        document.getElementById('b1').classList.remove('correct');
        console.log('b1 wrong')
    }

    //b2 row
    var b21 = puzzleb2[0] == document.getElementById('b21').value;
    var b22 = puzzleb2[1] == document.getElementById('b22').value;
    var b23 = puzzleb2[2] == document.getElementById('b23').value;
    var b24 = puzzleb2[3] == document.getElementById('b24').value;
    var b25 = puzzleb2[4] == document.getElementById('b25').value;
    var b26 = puzzleb2[5] == document.getElementById('b26').value;
    var b27 = puzzleb2[6] == document.getElementById('b27').value;
    var b28 = puzzleb2[7] == document.getElementById('b28').value;
    var b29 = puzzleb2[8] == document.getElementById('b29').value;
    if (b21 && b22 && b23 && b24 && b25 && b26 && b27 && b28 && b29) {
        document.getElementById('b2').classList.add('correct');
        console.log('b2 correct');
    } else {
        document.getElementById('b2').classList.remove('correct');
        console.log('b2 wrong')
    }

    //b3 row
    var b31 = puzzleb3[0] == document.getElementById('b31').value;
    var b32 = puzzleb3[1] == document.getElementById('b32').value;
    var b33 = puzzleb3[2] == document.getElementById('b33').value;
    var b34 = puzzleb3[3] == document.getElementById('b34').value;
    var b35 = puzzleb3[4] == document.getElementById('b35').value;
    var b36 = puzzleb3[5] == document.getElementById('b36').value;
    var b37 = puzzleb3[6] == document.getElementById('b37').value;
    var b38 = puzzleb3[7] == document.getElementById('b38').value;
    var b39 = puzzleb3[8] == document.getElementById('b39').value;
    if (b31 && b32 && b33 && b34 && b35 && b36 && b37 && b38 && b39) {
        document.getElementById('b3').classList.add('correct');
        console.log('b3 correct');
    } else {
        document.getElementById('b3').classList.remove('correct');
        console.log('b3 wrong')
    }

    //b4 row
    var b41 = puzzleb4[0] == document.getElementById('b41').value;
    var b42 = puzzleb4[1] == document.getElementById('b42').value;
    var b43 = puzzleb4[2] == document.getElementById('b43').value;
    if (b41 && b42 && b43) {
        document.getElementById('b4').classList.add('correct');
        console.log('b4 correct');
    } else {
        document.getElementById('b4').classList.remove('correct');
        console.log('b4 wrong')
    }

    if(document.getElementsByClassName('correct').length == 4) {
        bcorrect();
    }
}

function bcorrect() {
    document.getElementById('bfullaudio').style.display = "block"
}