# Relative Pitch Ear Training Game

A Web-App designed for musicians to improve their relative pitch skills.
The program generates a sequence of notes, and the user must reinput them in the correct order to succeed.
There a a few different options to make this easier or more difficult.
 
## UX


I coloured the more important buttons to convey their importance.

I chose to style the interface to look like an old synth to give it a bit of flare


## Features

I started working on the core skeleton of the app first. Just generating an array and getting the user to corecctly match it.
From there I added sounds and various sliders and radio to allow the user to tailer their difficulty.

Number of Notes: The longer the sequence of notes, the more difficult it is to remember and analyse.
BPM: Making the tempo faster give the user less time to process each note.
Leap Limit: Allowing the user the set the maximum distance between two subsequent notes, larger jumps being more difficult.
Radio buttons: Allowing the user to limit the pool of availible notes to only black keys, only white keys, or all.


### Features Left to Implement

I chose not to optimise for mobile since I had a limited amount of time and felt that some of the other features were more important.
I might consider adding a free play mode that allows the user to freely play notes on the keyboard. This would probably require rewriting major chunks of code though, as the playNote command needs arrays as input.
Fix the bug that only the bottom of the white keys are clickable.

## Technologies Used

HTML: For the structure of the webpage.
CSS: For the styling of the webpage.
Javascript: For programming the logic of the app.

Bootstrap: Used with HTML for the grid layout.
JQuery: Used with Javascript to simplify DOM manipulation.


## Testing

To test the app I ran it using all of the different options' settings, and in different combinations to make sure.

I had the few musicians in my class test it as well to try and find anything that I might have overlooked.

## Deployment

While working on the project, I have been incrementally commiting changes to a GitHub repository using the ubuntu console. This can be accessed at https://github.com/ShaneT1708/ear_training_game

A live version of the site can be found at https://shanet1708.github.io/ear_training_game/

## Credits

Background Wood Texture: https://www.freepik.com/free-photo/wooden-texture_1000699.htm#page=1&index=4&query=dark%20wood