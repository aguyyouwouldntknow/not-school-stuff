let clicks = document.querySelector("#button-counter");
console.log(clicks)
let n = 0

document.addEventListener("keydown", function(event) {
    if (event.key == "e"){
            n++;
    }
    clicks.textContent = n;
});
