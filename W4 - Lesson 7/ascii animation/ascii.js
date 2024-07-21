
/* declare and initialize public variables */
let animationArray = [];
let animationIntervalID;
let speed = 250;
let originalText = "";

/* prepare the default environment */
toggleButtons("initial"); // disable buttons by default

/* change the font size in the text area */
function fontsize() {
    const size = this.value;
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = size + 'pt';
}

/* change the animation array in the text area */
function animation() {
    const target = this.value;
    const textArea = document.getElementById("text-area");
    if (target !== "Blank") {
        animationArray = ANIMATIONS[target].split("=====\n");
        textArea.value = ANIMATIONS[target];
        toggleButtons('stop'); // activate start button after the animation is chosen
    } else {
        textArea.value = "";
        toggleButtons("initial");
        stopAnimationBtn();
    }
}

/* start the animation in the text area */
function startAnimationBtn() {
    const textArea = document.getElementById("text-area");
    originalText = textArea.value; // save the original text
    animationArray = textArea.value.split("=====\n");
    toggleButtons('start');
    let i = 0;
    animationIntervalID = setInterval(function () {
        textArea.value = animationArray[i];
        i = (i + 1) % animationArray.length;
    }, speed);
}

/* stop the animation in the text area */
function stopAnimationBtn() {
    clearInterval(animationIntervalID);
    const textArea = document.getElementById("text-area");
    textArea.value = originalText; // restore the original text
    toggleButtons('stop');
}

/* change the speed of the animation */
function speedUpTurbo() {
    if (this.checked) {
        speed = 50;
    } else {
        speed = 250;
    }
    if (animationIntervalID) {
        clearInterval(animationIntervalID);
        stopAnimationBtn(); // stop the current animation
        startAnimationBtn(); // start again with the new speed
    }
}

/* change the disable buttons when start or stop */
function toggleButtons(state) {
    const stop = document.getElementById("stop");
    const start = document.getElementById("start");
    const animationSelect = document.getElementById("animation");

    if (state === 'start') {
        stop.disabled = false;
        start.disabled = true;
        animationSelect.disabled = true;
    } else if (state === 'stop') {
        start.disabled = false;
        stop.disabled = true;
        animationSelect.disabled = false;
    } else {
        // initial state buttons are disabled
        start.disabled = true;
        stop.disabled = true;
        animationSelect.disabled = false;
    }
}

document.getElementById('fontsize').onchange = fontsize;
document.getElementById('animation').onchange = animation;
document.getElementById('start').onclick = startAnimationBtn;
document.getElementById('stop').onclick = stopAnimationBtn;
document.getElementById('turbo').onclick = speedUpTurbo;

