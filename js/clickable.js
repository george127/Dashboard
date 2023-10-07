// ========== clickable ===========
document.addEventListener("DOMContentLoaded", function() {
    const clickableImage1 = document.getElementById("clickable-image1");

clickableImage1.addEventListener("click", function () {
    this.classList.toggle("enlarged");
});

document.addEventListener("click", function (event) {
    if (!clickableImage1.contains(event.target)) {
        clickableImage1.classList.remove("enlarged");
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const clickableImage2 = document.getElementById("clickable-image2");

clickableImage2.addEventListener("click", function () {
    this.classList.toggle("enlarged");
});

document.addEventListener("click", function (event) {
    if (!clickableImage2.contains(event.target)) {
        clickableImage2.classList.remove("enlarged");
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const clickableImage3 = document.getElementById("clickable-image3");

clickableImage3.addEventListener("click", function () {
    this.classList.toggle("enlarged");
});

document.addEventListener("click", function (event) {
    if (!clickableImage3.contains(event.target)) {
        clickableImage3.classList.remove("enlarged");
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const clickableImage4 = document.getElementById("clickable-image4");

clickableImage4.addEventListener("click", function () {
    this.classList.toggle("enlarged");
});

document.addEventListener("click", function (event) {
    if (!clickableImage4.contains(event.target)) {
        clickableImage4.classList.remove("enlarged");
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const clickableImage5 = document.getElementById("clickable-image5");

clickableImage5.addEventListener("click", function () {
    this.classList.toggle("enlarged");
});

document.addEventListener("click", function (event) {
    if (!clickableImage5.contains(event.target)) {
        clickableImage5.classList.remove("enlarged");
    }
});
});
// ========== End clickable ===========