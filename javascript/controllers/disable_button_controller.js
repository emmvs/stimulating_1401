import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["button", "link"];

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
