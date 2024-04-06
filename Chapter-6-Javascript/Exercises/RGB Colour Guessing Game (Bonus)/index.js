// access elements then store in vars
var rect = document.querySelectorAll('.rect'), //rectangles of colors
rgbCode = document.querySelector('#rgbCode'), //rgb code to match
lives = document.getElementById('lives'), //div of lives
check = document.getElementById('check'), //heading text to put 'correct' or 'incorrect'
check_bg = document.querySelector('.header'), //div of headings to animate on correct/incorrect guess
rects = document.querySelector('.colors'); //div of rects
number = document.getElementById('number'), //span to put score
gameOverScreen = document.getElementById('game_over'); //hidden game over screen
overlay = document.getElementById('overlay'); //darkens the content below the gameOverScreen

// ==========GAME MECHANICS==========
var hearts = 5, //starting number of lives
score = 0, //player score
gameOver = false; //game state

rgbCode.textContent = colorToMatch(); //display color to match

// ==========GAMEPLAY==========
assignColors(); //assign colors upon start
livesDisplay(); //show 5 hearts upon start
function game(guessColor) {
    //game will run as long as gameOver is false
    if (!gameOver) {
        //if guess matches color, score +1 score and display 'correct' message
        if (guessColor === rgbCode.textContent) {
            score++;
            check.innerText = '(⌐■‿■) Correct!'; //change h1 text to 'Correct!'
            check_bg.style.animation = "none"; //remove animation
            void check_bg.offsetWidth; //trigger reflow
            check_bg.style.animation = "correct_anim 2s"; //re-add animation
            rgbCode.textContent = colorToMatch(); //generate new color to match
            assignColors(); //assign new colors to rectangles
        } else {
            //if guess is incorrect, hearts -1 and update lives display
            hearts--;
            livesDisplay();
            check.innerText = '( •_•)>⌐■-■ Incorrect.'; //change h1 text to 'Correct!'
            check_bg.style.animation = "none"; //remove animation
            void check_bg.offsetWidth; //trigger reflow
            check_bg.style.animation = "incorrect_anim 2s"; //re-add animation
        }
        //if hearts is 0 set gameOver to TRUE to end game
        if (hearts === 0) {
            gameOver = true;
            gameEnd(score);
        }
    }
}

// ==========GENERATING COLOR TO MATCH==========
function colorToMatch() {
    //generate and return three values from 0-255 for the rgb values
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// ==========GENERATING RANDOM COLORS==========
function generateColors() {
    //generate and return three values from 0-255 for the rgb values
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 
}

// ==========SHUFFLE FUNCTION==========
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// ==========ADDING COLORS TO RECTANGLES==========
function assignColors() {
    const colors = [generateColors(), generateColors(), generateColors(), rgbCode.textContent]; //array of all colors
    shuffleArray(colors); //shuffle array elements to randomly assign them to the rectangles
    for (var i = 0; i < 4; i++) {rect[i].style.background = colors[i];} //loop that gives the each rectangle the colors from the array
}

// ==========CLICKABLE COLORS (divs)==========
//loop to automatically give onclick event handlers (assign colors) to the rectangles
rect.forEach(function (element) {
    //when div is clicked and game is not over, use this div as a value to game(guessColor)
    element.onclick = function () {if (!gameOver) game(element.style.backgroundColor);};
});

// ==========LIVES NUMBER DISPLAY==========
function livesDisplay() {lives.innerText = '❤︎'.repeat(hearts);} //displays hearts according to the current number of hearts

// ==========HEARTS DISPLAY==========
//hearts follow the mouse

//getting mouseX position
function mouseX(evt) {
    if (!evt) evt = window.event;
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    else return 0;
}
//getting mouseY position
function mouseY(evt) {
    if (!evt) evt = window.event;
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    else return 0;
}
//assigning mouseX and mouseY to mouse with offset
function follow(evt) {
    lives.style.left = mouseX(evt) + 5 + 'px'; //5px is the x offset (puts the lives to the right of the mouse)
    lives.style.top = mouseY(evt) + -20+ 'px'; //-20 is the y offset (puts the lives higher from the mouse)
}

document.onmousemove = follow; //call 'follow' when mouse is moving

// ==========GAME OVER SCREEN==========
function gameEnd(score) {
    gameOverScreen.style.display = "block"; //display hidden game over screen
    number.innerText = score; //display score
    overlay.style.display = "block"; //display overlay
}

// ==========RESTART SYSTEM==========
function restartGame() {location.reload();} //refresh page to restart game