var countp1 = 0;
var countp2 = 0;
const resetButtonp1 = document.getElementById("reset1");
const resetButtonp2 = document.getElementById("reset2");
const timerButton = document.getElementById("timer-bt");
var timerInterval;
var seconds = 0;
var minutes = 0;

function count_up1() {
  countp1++;
  document.getElementById("count").innerText = countp1;
};

document.addEventListener("keyup", function(event) {
  if (event.key === "a" || event.key === "A") {
    count_up1();
  };
});

function count_up2() {
  countp2++;
  document.getElementById("count2").innerText = countp2;
};

document.addEventListener("keyup", function(event) {
  if (event.key === "l" || event.key === "L") {
    count_up2();
  };
});

function reset() {
  countp1 = 0;
  document.getElementById("count").innerText = countp1;
};

function reset2() {
  countp2 = 0;
  document.getElementById("count2").innerText = countp2;
};

resetButtonp1.addEventListener("click", function() {
  reset();
});

resetButtonp2.addEventListener("click", function() {
  reset2();
});

function startTimer() {
  seconds = 0;
  minutes = 0;
  document.getElementById("completion").innerText = ""
  document.getElementById("timer").innerText = "0:00";
  if (timerInterval) { clearInterval(timerInterval); }
  timerInterval = setInterval(updateTime, 1000);
};

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++
    clearInterval(timerInterval)
  };
  if (minutes == 1) {
    clearInterval(timerInterval)
    document.getElementById("completion").innerText = "TIMES UP!"
  }
  document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

timerButton.addEventListener("click", function() {
  startTimer()

});
