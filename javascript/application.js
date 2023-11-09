// Imports the Application object from the Stimulus package (main entry point for Stimulus app)
import { Application, Controller } from 'stimulus';

// Initialize the Stimulus application and makes it globally accessible
// Start Stimulus app and assigns it to a Stimulus property on the global window object
// By starting the application, Stimulus will automatically look for and initialize controllers as soon as the DOM is fully loaded.
// Assigning it to window = global access
window.Stimulus = Application.start()

// Import Controllers
import DisableButtonController from "./controllers/disable_button_controller.js"
import MoviesController from './controllers/movies_controller.js'

// Register controllers w/ their identifiers so Stimulus knows
// what code to execute when a matching data-controller is found in the HTML
Stimulus.register("disable-button", DisableButtonController)
Stimulus.register('movies', MoviesController)

// const button = document.querySelector("#click-me")
// button.addEventListener("click", (event) => {
//   console.log(event);
//   event.currentTarget.classList.remove("btn-primary");
//   event.currentTarget.classList.add("btn-danger");
//   event.currentTarget.innerText = "Bingo!";
// })
