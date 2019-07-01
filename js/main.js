$(document).ready(function () {

    $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);

    $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);



    // SOUNDS


    var c3 = new Audio('/assets/notes/c3.mp3');
    var cs3 = new Audio('/assets/notes/cs3.mp3');
    var d3 = new Audio('/assets/notes/d3.mp3');
    var ds3 = new Audio('/assets/notes/ds3.mp3');
    var e3 = new Audio('/assets/notes/e3.mp3');
    var f3 = new Audio('/assets/notes/f3.mp3');
    var fs3 = new Audio('/assets/notes/fs3.mp3');
    var g3 = new Audio('/assets/notes/g3.mp3');
    var gs3 = new Audio('/assets/notes/gs3.mp3');
    var a3 = new Audio('/assets/notes/a3.mp3');
    var as3 = new Audio('/assets/notes/as3.mp3');
    var b3 = new Audio('/assets/notes/b3.mp3');
    var c4 = new Audio('/assets/notes/c4.mp3');
    var cs4 = new Audio('/assets/notes/cs4.mp3');
    var d4 = new Audio('/assets/notes/d4.mp3');
    var ds4 = new Audio('/assets/notes/ds4.mp3');
    var e4 = new Audio('/assets/notes/e4.mp3');
    var f4 = new Audio('/assets/notes/f4.mp3');
    var fs4 = new Audio('/assets/notes/fs4.mp3');
    var g4 = new Audio('/assets/notes/g4.mp3');
    var gs4 = new Audio('/assets/notes/gs4.mp3');
    var a4 = new Audio('/assets/notes/a4.mp3');
    var as4 = new Audio('/assets/notes/as4.mp3');
    var b4 = new Audio('/assets/notes/b4.mp3');
    var c5 = new Audio('/assets/notes/c5.mp3');
  
    var notes = [c3,cs3,d3,ds3,e3,f3,fs3,g3,gs3,a3,as3,b3,c4,cs4,d4,ds4,e4,f4,fs4,g4,gs4,a4,as4,b4,c5];




//var hit = new Audio('assets/Hitmarker.mp3');

    // OPTIONS

    $("#lenSlide").on("input", function () {
        $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);
    })

    $("#tempSlide").on("input", function () {
        $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);
    })

    
    var melody = [];

    // When "Play!" is clicked

    $("#play").on("click", function () {
        var j = 0;
        melody.length = 0;
        userArr.length = 0;
        var melLength = document.getElementById("lenSlide").value;
        var tempo = document.getElementById("tempSlide").value;
        for (i = 0; i < melLength; i++) {
            melody.push(Math.floor(Math.random() * 19));
        }

        setTimeout(melodyPlayback, 1000,melody,notes,tempo,j);
        console.log(melody);
    })

    // When "Repeat" is clicked
    $("#repeat").on("click", function () {
        var j =0;
       var tempo = document.getElementById("tempSlide").value;


    setTimeout(melodyPlayback, 1000,melody,notes,tempo,j);
    console.log(melody);
    })

    //MAIN GAME

    var userArr = [];

    $(".pianoKey").on("click", function () {
        userArr.push(parseInt((event.target.id).substr(1, 2)));
        console.log(userArr);
    })


    //When "Check" is clicked

    $("#check").on("click", function () {
        console.log(melody);
        if (compare(melody, userArr) && melody!="") {
            $("#status").text("Correct!");
        } else {
            $("#status").text("Incorrect!");
        }
    })

    //When "Undo" is clicked

    $("#undo").on("click", function () {
        userArr.pop();
    })
})


//FUNCTIONS

//Compare Arrays


function compare(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        if (arr1[i] != arr2[i]) {
            return false;
        }

    }
    return true;
}

// Playback Melody Array
//WRITE ABOUT WHY FOR LOOP DIDN'T WORK IN READ.ME


function melodyPlayback(mel,nots,bpm,jj) {
    
    console.log(bpm);
    setTimeout(playNote,(60000/bpm),mel,nots,bpm,jj);

};

//Play Note

function playNote(mel,nots,bpm,jj){
    console.log(jj);
    if(mel[jj]==mel[jj-1]){
        nots[mel[jj-1]].load();
    }
    nots[mel[jj]].play();
    jj++;
    if(jj<mel.length){
        melodyPlayback(mel,nots,bpm,jj);
    }};