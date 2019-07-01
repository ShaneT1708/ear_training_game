$(document).ready(function () {

    $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);

    $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);



    // SOUNDS


    var c3 = new Audio('assets/notes/c3');
    var cs3 = new Audio('assets/notes/cs3');
    var d3 = new Audio('assets/notes/d3');
    var ds3 = new Audio('assets/notes/ds3');
    var e3 = new Audio('assets/notes/e3');
    var f3 = new Audio('assets/notes/f3');
    var fs3 = new Audio('assets/notes/fs3');
    var g3 = new Audio('assets/notes/g3');
    var gs3 = new Audio('assets/notes/gs3');
    var a3 = new Audio('assets/notes/a3');
    var as3 = new Audio('assets/notes/as3');
    var b3 = new Audio('assets/notes/b3');
    var c4 = new Audio('assets/notes/c4');
    var cs4 = new Audio('assets/notes/cs4');
    var d4 = new Audio('assets/notes/d4');
    var ds4 = new Audio('assets/notes/ds4');
    var e4 = new Audio('assets/notes/e4');
    var f4 = new Audio('assets/notes/f4');
    var fs4 = new Audio('assets/notes/fs4');
    var g4 = new Audio('assets/notes/g4');
    var gs4 = new Audio('assets/notes/gs4');
    var a4 = new Audio('assets/notes/a4');
    var as4 = new Audio('assets/notes/as4');
    var b4 = new Audio('assets/notes/b4');
    var c5 = new Audio('assets/notes/c5');
  



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

        melody.length = 0;
        var melLength = document.getElementById("lenSlide").value;
        for (i = 0; i < melLength; i++) {
            melody.push(Math.floor(Math.random() * 19));
        }

        setTimeout(melodyPlayback(melody), 1000);
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
        if (compare(melody, userArr)) {
            $("#status").text("Correct!");
        } else {
            $("#status").text("Incorrect!");
        }
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

function melodyPlayback(mel) {
    $()
}