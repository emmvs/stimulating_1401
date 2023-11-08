// Stimulus Setup II
import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

// const button = document.querySelector("#click-me")
// button.addEventListener("click", (event) => {
//   // console.log(event);
//   event.currentTarget.classList.remove("btn-primary");
//   event.currentTarget.classList.add("btn-danger");
//   event.currentTarget.innerText = "Bingo!";
// })
