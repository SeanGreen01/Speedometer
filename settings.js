"use strict"

function orientationCheck() {
    let portrait = window.matchMedia("(orientation: portrait)");

    portrait.addEventListener("change", function (e) {
        if (e.matches) {
            document.getElementById("settings-view").style.display = "block";
            document.getElementById("speedometer-view").style.display = "none";
        } else {
            document.getElementById("settings-view").style.display = "none";
            document.getElementById("speedometer-view").style.display = "block";
        }
    })

}

document.getElementById("save-settings").addEventListener("click", function () {
    const chosenUnit = document.getElementById("speed-unit").value;
    localStorage.setItem("speedUnit", chosenUnit);
    alert("Settings saved!");
});

orientationCheck();