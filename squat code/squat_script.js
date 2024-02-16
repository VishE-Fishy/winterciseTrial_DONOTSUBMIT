var countp1 = 0;
var countp2 = 0

function upOne() {
    countp1++;
    document.getElementById("counter1").textContent = countp1;
}

document.addEventListener("keyup", event => { 
    if (event.key === "a" || event.key === "A") { 
        upOne();

    }
});

function upOneP2() {
    countp2++
    document.getElementById("counter2").textContent = countp2;
}

document.addEventListener("keyup", event => { 
    if (event.key === "l" || event.key === "L") { 
        upOneP2();

    }
});

function reset() {
    countp1 = 0;
    document.getElementById("counter1").textContent = countp1;
}

function reset2() {
    countp2=0
    document.getElementById("counter2").textContent = countp2;
}

