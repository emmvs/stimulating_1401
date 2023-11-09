// js_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["button"]

  connect() {
    console.log("👻");
  }
  open() {
    console.log("Some code that will open file");
  }
}
