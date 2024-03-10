// Play audio
function playAudio() {
  const playButton = document.querySelector('#ligar');
  playButton.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio && audio.play) {
      audio.play();
    } else {
      console.warn('Audio playback not supported or audio element not found.');
    }
  });
}

// Stop audio
function pauseAudio() {
  const stopButton = document.querySelector('#desligar');
  stopButton.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio && audio.pause) {
      audio.pause();
    }
  });
}

playAudio();
pauseAudio();
