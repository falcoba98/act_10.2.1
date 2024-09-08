document.getElementById("saveButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    localStorage.setItem("inputText", inputText);
});