function playAudio(clicked_id) {
    //call audio
    var audio = new Audio("Audio Sampler/Audio/" + clicked_id + ".mp3"); /* "Audio Sampler/Audio/" = location of audios
                                                                            clicked_id = id of the button
                                                                            ".mp3" = audio file extension string */
    audio.play(); //play audio
}