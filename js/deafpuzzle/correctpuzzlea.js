const puzzlea1 = ['2','3','4','2','6','6','5'];
const puzzlea2 = ['1','2','3','1','5','5','4','3','2'];
const puzzlea3 = ['2','3','4','2','4','5','3','2','1'];
const puzzlea4 = ['1','5','4'];

function upcrystala(id) {
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
            current.classList.add('crystal1');
            current.value = 1;
            break;
        default:
            console.log('crystal error')
    }
    //a1 row
    var a11 = puzzlea1[0] == document.getElementById('a11').value;
    var a12 = puzzlea1[1] == document.getElementById('a12').value;
    var a13 = puzzlea1[2] == document.getElementById('a13').value;
    var a14 = puzzlea1[3] == document.getElementById('a14').value;
    var a15 = puzzlea1[4] == document.getElementById('a15').value;
    var a16 = puzzlea1[5] == document.getElementById('a16').value;
    var a17 = puzzlea1[6] == document.getElementById('a17').value;
    if (a11 && a12 && a13 && a14 && a15 && a16 && a17) {
        document.getElementById('a1').classList.add('correct');
        console.log('a1 correct');
    } else {
        document.getElementById('a1').classList.remove('correct');
        console.log('a1 wrong')
    }

    //a2 row
    var a21 = puzzlea2[0] == document.getElementById('a21').value;
    var a22 = puzzlea2[1] == document.getElementById('a22').value;
    var a23 = puzzlea2[2] == document.getElementById('a23').value;
    var a24 = puzzlea2[3] == document.getElementById('a24').value;
    var a25 = puzzlea2[4] == document.getElementById('a25').value;
    var a26 = puzzlea2[5] == document.getElementById('a26').value;
    var a27 = puzzlea2[6] == document.getElementById('a27').value;
    var a28 = puzzlea2[7] == document.getElementById('a28').value;
    var a29 = puzzlea2[8] == document.getElementById('a29').value;
    if (a21 && a22 && a23 && a24 && a25 && a26 && a27 && a28 && a29) {
        document.getElementById('a2').classList.add('correct');
        console.log('a2 correct');
    } else {
        document.getElementById('a2').classList.remove('correct');
        console.log('a2 wrong')
    }

    //a3 row
    var a31 = puzzlea3[0] == document.getElementById('a31').value;
    var a32 = puzzlea3[1] == document.getElementById('a32').value;
    var a33 = puzzlea3[2] == document.getElementById('a33').value;
    var a34 = puzzlea3[3] == document.getElementById('a34').value;
    var a35 = puzzlea3[4] == document.getElementById('a35').value;
    var a36 = puzzlea3[5] == document.getElementById('a36').value;
    var a37 = puzzlea3[6] == document.getElementById('a37').value;
    var a38 = puzzlea3[7] == document.getElementById('a38').value;
    var a39 = puzzlea3[8] == document.getElementById('a39').value;
    if (a31 && a32 && a33 && a34 && a35 && a36 && a37 && a38 && a39) {
        document.getElementById('a3').classList.add('correct');
        console.log('a3 correct');
    } else {
        document.getElementById('a3').classList.remove('correct');
        console.log('a3 wrong')
    }

    //a4 row
    var a41 = puzzlea4[0] == document.getElementById('a41').value;
    var a42 = puzzlea4[1] == document.getElementById('a42').value;
    var a43 = puzzlea4[2] == document.getElementById('a43').value;
    if (a41 && a42 && a43) {
        document.getElementById('a4').classList.add('correct');
        console.log('a4 correct');
    } else {
        document.getElementById('a4').classList.remove('correct');
        console.log('a4 wrong')
    }

    if(document.getElementsByClassName('correct').length == 4) {
        acorrect();
    }
}

function acorrect() {
    document.getElementById('afullaudio').style.display = "block";
    document.getElementById('bpuzzleboard').style.display = "block";
}