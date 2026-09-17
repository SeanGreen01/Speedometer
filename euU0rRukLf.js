"use strict";
//event listener to start the application
document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM Content Loaded");

    //initialises each of the MVC files
    const model = new model_euU0rRukLf();
    const view = new view_euU0rRukLf();
    const controller = new controller_euU0rRukLf(model, view);

    //calls the startGPS function in teh controller
    controller.startGPS()

    //calls teh registerSW function in the controller
    await controller.registerSW();

    //await model.fetchData();
    // fetch("https://devweb2024.cis.strath.ac.uk/aes02112-nodejs/speed?lat=55.861365&lon=-4.243730")
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));
    //
    //
    });


