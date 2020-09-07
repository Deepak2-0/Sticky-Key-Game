let i = 0;
document.getElementsByTagName("button")[0].style.visibility = "hidden";

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 16) {
    playSound("yellow");
    i++;
  }
  if (i === 5) {
    playSound("red");
    document.getElementById("result").innerHTML =
      "Congrats you have activated the sticky Key";
    // alert("stickyKeygetsactivated");
    document.getElementsByTagName("button")[0].style.visibility = "visible";
    // document.removeEventListener("keydown");
    i = 0;
  }
});

function playSound(file) {
  if (i <= 5) {
    let audio = new Audio(`${file}.mp3`);
    audio.play();
  }
}

setInterval(() => {
  i = 0;
}, 5000);
