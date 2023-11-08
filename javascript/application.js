// Bring the necessary Stimulus classes into your files
import { Application, Controller } from 'stimulus';

// Initialize the Stimulus application and makes it globally accessible
window.Stimulus = Application.start()

// Import Controllers
import MoviesController from './controllers/movies_controller.js'
import DisableButtonController from "./controllers/disable_button_controller.js"

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
