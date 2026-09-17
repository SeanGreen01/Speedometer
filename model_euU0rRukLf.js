"use strict";

class model_euU0rRukLf {
    constructor() {
        this.speed = 0;
        this.latitude = null;
        this.longitude = null;
        this.streetName = "Null"
        this.speedUnit = "MPH"
    }

    convertSpeedToMPH(localUnit) {
        let convertedSpeed;

        switch (this.speedUnit) {
            case "MPH":
                return Math.round(this.speed * 2.23694);
            case "KMH":
                return Math.round(this.speed * 3.6);
            case "LOCAL":
                if (localUnit === "km/h"){
                    return Math.round(this.speed * 3.6);
                } else {
                    return Math.round(this.speed * 2.23694);
                }
            default:

                return Math.round(this.speed * 2.23694);
        }
    }

    updateLocation(latitude, longitude){
        console.log("successfully updates location (2)")
        this.latitude = latitude;
        this.longitude = longitude;

    }

    updateSpeed(newSpeed) {
        console.log("successfully updated speed (1)")
        this.speed = newSpeed || 0;
        //this.speed = 30;
        //this.speed = 40;
        //this.speed = 60;

    }




    async fetchStreet(latitude, longitude){
        console.log("successfully fetched street name (5)");
        try{
            const responseSD = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${latitude}&lon=${longitude}`); //create the variables lat and lon to pass in here
            //const response = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${55.863377}&lon=${-4.302762}`)
            if (!responseSD.ok){
                throw new Error("Couldn't fetch Street Name data from API");
            }
            const streetData = await responseSD.json();

            console.log(streetData);
            console.log("This is the street name " + streetData.name); //This is the street name[object Object]

            return streetData.name || "Unknown Street";
        }
        catch(error) {
            console.log(error);
        }
    }

    async fetchSpeedLimit(latitude, longitude){
        console.log("successfully fetched speed limit (3)");
        try{
            const responseSL = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${this.latitude}&lon=${this.longitude}`);
            //const responseSL = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${55.863377}&lon=${-4.302762}`)
            if (!responseSL.ok){
                throw new Error("Couldn't fetch Speed Limit data from API");
            }
            const speedLimitData = await responseSL.json();
            console.log("successfully updated speed limit (4) (speed limit: " + speedLimitData.localSpeedLimit);

            //return 20;
            return speedLimitData.localSpeedLimit;
        }
        catch(error) {
            console.log(error);
        }
    }

    async fetchLocalUnits(latitude, longitude){
        console.log("successfully fetched speed limit (3)");
        try{
            const responseLU = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${this.latitude}&lon=${this.longitude}`);
            //const responseSL = await fetch(`https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=${55.863377}&lon=${-4.302762}`)
            if (!responseLU.ok){
                throw new Error("Couldn't fetch Speed Limit data from API");
            }
            const localUnit = await responseLU.json();
            console.log("successfully updated speed limit (4) (speed limit: " + localUnit.localSpeedUnit);

            //return 20;
            return localUnit.localSpeedUnit;
        }
        catch(error) {
            console.log(error);
        }
    }
}



