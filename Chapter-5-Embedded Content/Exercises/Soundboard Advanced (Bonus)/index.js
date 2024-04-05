//function for playng audio of text input
function textToAudio() {
    let text = document.getElementById("speak_text").value; 
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

//function for playing audio of buttons
function playAudio(clicked_id) {
    //call audio
    var audio = new Audio("Audio Sampler/Audio/" + clicked_id + ".mp3"); /* "Audio Sampler/Audio/" = location of audios
                                                                            clicked_id = id of the button
                                                                            ".mp3" = audio file extension string */
    audio.play(); //play audio
}