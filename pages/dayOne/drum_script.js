//auto load audios
let allAudios = document.querySelectorAll("audio");

allAudios.forEach((audio) => {
  audio.preload = "auto";
});

window.addEventListener("keydown", (e) => {
  playMusic(e);
  changeBorder(e);
});

function playMusic(e) {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function changeBorder(e) {
  const pressedDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!pressedDiv) return;
  // console.log(pressedDiv);
  pressedDiv.classList.add("pressed");
  setTimeout(() => {
    pressedDiv.classList.remove("pressed");
  }, 70);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", function () {
    // `this` refers to the element that was clicked.
    const keyCode = this.getAttribute("data-key");

    // We can create a fake event object to pass to our functions
    // which expect an object with a `keyCode` property.
    const fakeEvent = { keyCode: keyCode };
    playMusic(fakeEvent);
    changeBorder(fakeEvent);
  });
});
