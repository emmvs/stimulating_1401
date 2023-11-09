// Import Controller class from Stimulus framework
// Controllers = CORE CONCEPTS of Stimulus
// - to add behavior to the HTML
// - by connecting them to DOM elements
import { Controller } from 'stimulus'

// Creates new Controller class without name (anonymous class)
// Exports it as the default export of the module
// Meaning: It not only inherits all the functionalities of a Stimulus Controller
// but also get all the additional functionalities we give to it
export default class extends Controller {
  static targets = ["button", "link"];

  // Connect Method
  // Special lifecycle callback provided by Stimulus | similar to hooks
  // - lifecycle call back means it is automatically called by Stimulus
  // - when the controller is connected to the DOM through rendering HTML element (data-controller)
  connect() {
    console.log("👻");
  }

  disable() {
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute("disabled", "");
    console.log("Button has been buttoned 🥁");

    this.linkTarget.classList.remove("d-none");
    console.log("Link is visible again 👻");
  }

  reset() {
    this.buttonTarget.innerText = "Click me!";
    this.buttonTarget.removeAttribute("disabled", "");
    this.linkTarget.classList.add("d-none");
    console.log("Link is hidden again 📦");
    console.log("Button can be buttoned 🥁");
  }
}
