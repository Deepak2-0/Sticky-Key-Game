let i = 0;
document.getElementsByTagName("button")[0].style.visibility = "hidden";

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 16) {
    console.log(event);
    i++;
  }
  if (i === 5) {
    document.getElementById("result").innerHTML =
      "Congrats you have activated the sticky Key";
    // alert("stickyKeygetsactivated");
    document.getElementsByTagName("button")[0].style.visibility = "visible";
    // document.removeEventListener("keydown");
    i = 0;
  }
});

setInterval(() => {
  i = 0;
}, 5000);
