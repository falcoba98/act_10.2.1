document.addEventListener("DOMContentLoaded", function () {
    const data = document.getElementById("data");
    const storedText = localStorage.getItem("inputText");
    data.textContent = storedText;
});