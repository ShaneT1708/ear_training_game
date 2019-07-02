$(document).ready(function () {

    $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);

    $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);



    // SOUNDS


    var cn3 = new Audio("../assets/notes/cn3.mp3");
    var cs3 = new Audio('../assets/notes/cs3.mp3');
    var dn3 = new Audio('../assets/notes/dn3.mp3');
    var ds3 = new Audio('../assets/notes/ds3.mp3');
    var en3 = new Audio('../assets/notes/en3.mp3');
    var fn3 = new Audio('../assets/notes/fn3.mp3');
    var fs3 = new Audio('../assets/notes/fs3.mp3');
    var gn3 = new Audio('../assets/notes/gn3.mp3');
    var gs3 = new Audio('../assets/notes/gs3.mp3');
    var an3 = new Audio('../assets/notes/an3.mp3');
    var as3 = new Audio('../assets/notes/as3.mp3');
    var bn3 = new Audio('../assets/notes/bn3.mp3');
    var cn4 = new Audio('../assets/notes/cn4.mp3');
    var cs4 = new Audio('../assets/notes/cs4.mp3');
    var dn4 = new Audio('../assets/notes/dn4.mp3');
    var ds4 = new Audio('../assets/notes/ds4.mp3');
    var en4 = new Audio('../assets/notes/en4.mp3');
    var fn4 = new Audio('../assets/notes/fn4.mp3');
    var fs4 = new Audio('../assets/notes/fs4.mp3');
    var gn4 = new Audio('../assets/notes/gn4.mp3');
    var gs4 = new Audio('../assets/notes/gs4.mp3');
    var an4 = new Audio('../assets/notes/an4.mp3');
    var as4 = new Audio('../assets/notes/as4.mp3');
    var bn4 = new Audio('../assets/notes/bn4.mp3');
    var cn5 = new Audio('../assets/notes/cn5.mp3');

    var notes = [cn3, cs3, dn3, ds3, en3, fn3, fs3, gn3, gs3, an3, as3, bn3, cn4, cs4, dn4, ds4, en4, fn4, fs4, gn4, gs4, an4, as4, bn4, cn5];





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

        setTimeout(melodyPlayback, 1000, melody, notes, tempo, j);
        console.log(melody);
    })

    // When "Repeat" is clicked
    $("#repeat").on("click", function () {
        var j = 0;
        var tempo = document.getElementById("tempSlide").value;


        setTimeout(melodyPlayback, 1000, melody, notes, tempo, j);
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
        if (compare(melody, userArr) && melody != "") {
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

// KEYS STYLING AND FUNCTIONALITY
$(".wKey").mouseenter(function () {
    $(this).addClass("wKHov");
});

$(".wKey").mouseleave(function () {
    $(this).removeClass("wKHov");
});

$(".bKey").mouseenter(function () {
    $(this).addClass("bKHov");
});

$(".bKey").mouseleave(function () {
    $(this).removeClass("bKHov");
});

$(".bKey, .wKey").click(function () {
    $(this).animate({backgroundColor: "#FF0000"}, "slow");
});

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


function melodyPlayback(mel, nots, bpm, jj) {

    console.log(bpm);
    setTimeout(playNote, (60000 / bpm), mel, nots, bpm, jj);

};

//Play Note

function playNote(mel, nots, bpm, jj) {
    console.log(jj);
    if (mel[jj] == mel[jj - 1]) {
        nots[mel[jj - 1]].load();
    }
    nots[mel[jj]].play();
    jj++;
    if (jj < mel.length) {
        melodyPlayback(mel, nots, bpm, jj);
    }
};