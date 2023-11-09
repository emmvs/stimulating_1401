import { Controller } from 'stimulus';

export default class extends Controller {
  // Targets are a way to collect elements from the HTML
  static targets = ["input", "results"]

  // Values are a way to store data in our HTML, & collecting it
  static values = {
    baseUrl: String
  }

  connect() {
    console.log("Hello from Movies 🎬")
    console.log("input -", this.inputTarget);
  }

  search(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = "";
    // debugger
    console.log("log -", "search was submitted!!!!!!!!!!!!");
    console.log(".value -", this.inputTarget.value);
    // const name = "Emma was here 👻"
    // debugger

    fetch(`${this.baseUrlValue}?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
      // debugger
      data.Search.forEach((movie) => {
        const movieTag = `<li class="list-group-item border-0">
          <img src="${movie.Poster}" alt="${movie.Title}" width="100" height="100%">
        </li>`
        this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
      })
    })
  }
}
