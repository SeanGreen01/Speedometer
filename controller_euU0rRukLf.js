"use strict";

class controller_euU0rRukLf {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
//the startGPS function is used to start the program up and begin collecting data from teh sensors to then pass into other functions
    startGPS() {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(
                (position) => this.handleGPSInfo(position),
                (error) => console.error("GPS Error:", error),
                {enableHighAccuracy: true, maximumAge: 1000 }
            );
        } else {
            console.error("Geolocation not supported on this device.");
        }
    }
//the handleGPS function is used to call on the updateSpeed function in the model and then display it in the view
// should this be moved to the model file?
    async handleGPSInfo(position) {
        console.log("handleGPSInfo called");



        // let speed = 12;
        let speed = position.coords.speed || 0;
        this.model.updateSpeed(speed);
        //function call #1

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.model.updateLocation(latitude, longitude);
        //function call #2



        //you are trying to return 2 variables from the fetchData function - might not be the correct way to do it
        let speedLimit;
        try {
            speedLimit = await this.model.fetchSpeedLimit(latitude, longitude);
            console.log("speed limit is", speedLimit);
        } catch (error) {
            console.log("Error fetching speed limit:", error);
        }
        //function call #3

        let localUnit;
        try {
            localUnit = await this.model.fetchLocalUnits(latitude, longitude);
            console.log("local speed is measured in ", localUnit);
        } catch (error) {
            console.log("Error fetching speed limit:", error);
        }


        let street;
        try {
            street = await this.model.fetchStreet(latitude, longitude);
        } catch (error) {
            console.log("Error fetching street:", error);
        }

        console.log("Street name from API:", street);



        let convertedSpeed = this.model.convertSpeedToMPH(localUnit);
        console.log("converted speed: ", convertedSpeed);

        this.view.updateSpeed(convertedSpeed, speedLimit);
        //this.view.updateStreet(street);
        this.view.updateStreet(street || "Unknown Location");
        this.view.updateSpeedLimit(speedLimit);





    }

    //this is the function used to register the service worker file for the PWA
    // should this be moved to the model file too?
    async registerSW() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator
                    .serviceWorker
                    .register('serviceworker.js');
            }
            catch (e) {
                console.log('SW registration failed');
            }
        }
    }

}

