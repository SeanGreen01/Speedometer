"use strict";

class view_euU0rRukLf {
    speedLimitImage;
    constructor() {
        this.speedDisplay = document.getElementById("speed");
        this.unitDisplay = document.getElementById("unit");
        this.streetDisplay = document.getElementById("street");
        this.speedLimitImage = document.getElementById("speed-limit-img");


    }

    updateSpeed(speed, speedLimit) {
        console.log("updating speed display:", speed);
        this.speedDisplay.textContent = speed;

        if (speedLimit) {
            if (speed > speedLimit) {
                this.speedDisplay.classList.add("speed-too-fast");
            } else if (speed >= speedLimit - 5) {
                this.speedDisplay.classList.add("speed-too-slow");
            } else {
                this.speedDisplay.classList.add("speed-regular");
            }
        } else {
            this.speedDisplay.classList.add("speed-regular");
        }
    }



    updateStreet(street) {
        console.log("updating location data:", street);
        this.streetDisplay.textContent = street;
    }

    updateSpeedLimit(speedLimit) {
        console.log("updating speed limit:", speedLimit);
        //this.speedLimitImage.src = `images/30-500x300.png`
        if (speedLimit) {
            //this.speedLimitImage.src = `home/hsb23128/DEVWEB/2024/images/${speedLimit}-500x300.png`
            this.speedLimitImage.src = `images/${speedLimit}-500x300.png`
            console.log("speed limit exists - fetching speed limit sign")
            //images/60-500x300.png
            //${speedLimit}
            ///home/hsb23128/DEVWEB/2024/images/10-500x300.png
            //speed limit signs dont seem to be loading correctly and the img files are uploaded to devweb, but not showing on sources page of browser
        } else {
            this.speedLimitImage.style.display = "none";
        }

    }



}

