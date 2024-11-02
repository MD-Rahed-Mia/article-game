const btn = document.getElementById("btn");

const webContainer = document.getElementById("website");
const timer = document.getElementById("timer");

btn.addEventListener("click", () => {
  timerFunc();
  webContainer.innerHTML = `
        <embed
      type="text/html"
      src="https://8541.play.gamezop.com/en/intro?int-nav=1"
      style="width: 100%; height: 100vh"
    />
    `;
});

function timerFunc() {
  let counter = 45;

  //   added timer
  timer.classList.add("active");

  var interVal = setInterval(() => {
    if (document.hasFocus()) {
      counter--;
      timer.innerText = counter;
    }

    if (counter === 0) {
      alert("task completed successful.");
      clearInterval(interVal);
      webContainer.innerHTML = "";
      timer.classList.remove("active");
    }
  }, 1000);
}
