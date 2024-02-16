var count = 0;

function increment(event) {
    if (event.key === "a" || event.key === "A") {
        count++;
        document.getElementById("counter").textContent = count;
    }
}

document.addEventListener("keydown", increment);
