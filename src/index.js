function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "Poems displayed here in the box",
      cursor: "",
      autoStart: true,
      delay: 35,
    });

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);