$(document).ready(function () {

    $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);

    $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);

    $("#lLInfo").text(`Leap Limit (Semitones): ${document.getElementById("lL").value}`);

    $('#myModal').modal('show');

    $("#userArrDisplay").text(`Your Notes: `); // for "Your Notes:"

    var cw = $('.keyboard').width();
    $('.keyboard').css({
        'height': (cw / 3) + 'px'
    });
    $(window).resize(function () {
        var cw = $('.keyboard').width();
        $('.keyboard').css({
            'height': (cw / 3) + 'px'
        });
    });
    // SOUNDS


    var cn3 = new Audio("assets/notes/cn3.mp3");
    var cs3 = new Audio("assets/notes/cs3.mp3");
    var dn3 = new Audio("assets/notes/dn3.mp3");
    var ds3 = new Audio("assets/notes/ds3.mp3");
    var en3 = new Audio("assets/notes/en3.mp3");
    var fn3 = new Audio("assets/notes/fn3.mp3");
    var fs3 = new Audio("assets/notes/fs3.mp3");
    var gn3 = new Audio("assets/notes/gn3.mp3");
    var gs3 = new Audio("assets/notes/gs3.mp3");
    var an3 = new Audio("assets/notes/an3.mp3");
    var as3 = new Audio("assets/notes/as3.mp3");
    var bn3 = new Audio("assets/notes/bn3.mp3");
    var cn4 = new Audio("assets/notes/cn4.mp3");
    var cs4 = new Audio("assets/notes/cs4.mp3");
    var dn4 = new Audio("assets/notes/dn4.mp3");
    var ds4 = new Audio("assets/notes/ds4.mp3");
    var en4 = new Audio("assets/notes/en4.mp3");
    var fn4 = new Audio("assets/notes/fn4.mp3");
    var fs4 = new Audio("assets/notes/fs4.mp3");
    var gn4 = new Audio("assets/notes/gn4.mp3");
    var gs4 = new Audio("assets/notes/gs4.mp3");
    var an4 = new Audio("assets/notes/an4.mp3");
    var as4 = new Audio("assets/notes/as4.mp3");
    var bn4 = new Audio("assets/notes/bn4.mp3");
    var cn5 = new Audio("assets/notes/cn5.mp3");

    var notes = [cn3, cs3, dn3, ds3, en3, fn3, fs3, gn3, gs3, an3, as3, bn3, cn4, cs4, dn4, ds4, en4, fn4, fs4, gn4, gs4, an4, as4, bn4, cn5];





    // OPTIONS

    $("#lenSlide").on("input", function () {
        $("#lenSlideInfo").text(`Number of Notes: ${document.getElementById("lenSlide").value}`);
    })

    $("#tempSlide").on("input", function () {
        $("#tempSlideInfo").text(`BPM: ${document.getElementById("tempSlide").value}`);
    })

    $("#lL").on("input", function () {
        $("#lLInfo").text(`Leap Limit (Semitones): ${document.getElementById("lL").value}`);
    })

    var melody = [];

    // When "Play!" is clicked

    $("#play").on("click", function () {
            var j = 0;
            melody.length = 0;
            userArr.length = 0;
            var melLength = document.getElementById("lenSlide").value;
            var tempo = document.getElementById("tempSlide").value;
            var lLimit = document.getElementById("lL").value;

            if (document.getElementById("bk").checked) {
                var i = 0;
                while (i < melLength) {
                    var buf = Math.floor(Math.random() * 10);
                    if (!melody.includes(buf)) {
                        if (i > 0) {
                            if (Math.abs(buf-melody[i - 1]) <= lLimit) {
                                melody.push(buf);
                                console.log("Hi" + lLimit + "M" + melody[i - 1] );
                                i++;
                            }
                            else continue;
                        } else {
                            melody.push(buf);
                            i++;
                        }
                    }

                    else continue;
                    
                } 
                
            
            melody = toBlackKeys(melody);
            
            
        

        } else if (document.getElementById("wk").checked) {
            var i = 0;
            while (i < melLength) {
                var buf = Math.floor(Math.random() * 15);
                if (!melody.includes(buf)) {
                    melody.push(buf);
                } else continue;
                i++
            }
            melody = toWhiteKeys(melody);
        } else if (document.getElementById("chrom").checked) {
            var i = 0;
            while (i < melLength) {
                var buf = Math.floor(Math.random() * 25);
                if (!melody.includes(buf)) {
                    melody.push(buf);
                } else continue;
                i++
            }
        }
        $(".wKey, .bKey").removeClass("firstNote"); $("#b" + melody[0]).addClass("firstNote"); setTimeout(melodyPlayback, 50, melody, notes, tempo, j); console.log(melody); userArr.push(melody[0]); $("#userArrDisplay").text(`Your Notes: ${parseNotes(userArr)}`); // for "Your Notes:"
    })

// When "Repeat" is clicked
$("#repeat").on("click", function () {
    var j = 0;
    var tempo = document.getElementById("tempSlide").value;

    setTimeout(melodyPlayback, 50, melody, notes, tempo, j);
    console.log(melody);

})

//MAIN GAME

var userArr = [];

$(".pianoKey").on("click", function () {
    if (userArr.length <= 9) {
        userArr.push(parseInt((event.target.id).substr(1, 2)));
        console.log(userArr);
        $("#userArrDisplay").text(`Your Notes: ${parseNotes(userArr)}`); // for "Your Notes:"
    }
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
    $("#userArrDisplay").text(`Your Notes: ${parseNotes(userArr)}`); // for "Your Notes:"
})

//When "Reveal" is clicked

$("#reveal").on("click", function () {
    userArr.pop();
    $("#userArrDisplay").text(`Answer: ${parseNotes(melody)}`);
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
    $(this).addClass("kClick").delay(200).queue(function () {
        $(this).removeClass("kClick").dequeue();
    });
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
    nots[mel[jj]].play();
    jj++;
    if (jj < mel.length) {
        melodyPlayback(mel, nots, bpm, jj);
    }
};

//Parse Notes

function parseNotes(ar) {
    nar = ["C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5"]
    jar = [];
    for (ii = 0; ii < ar.length; ii++) {
        jar.push(nar[ar[ii]]);
    }
    return jar;
}

//Convert To Black Keys

function toBlackKeys(ar) {
    bar = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22];
    jar = [];
    for (i = 0; i < ar.length; i++) {
        jar.push(bar[ar[i]]);
    }
    return jar;

}

//Convert To White Keys

function toWhiteKeys(ar) {
    bar = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24];
    jar = [];
    for (i = 0; i < ar.length; i++) {
        jar.push(bar[ar[i]]);
    }
    return jar;

}