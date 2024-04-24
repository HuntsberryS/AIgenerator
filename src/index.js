function getRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipespot", {
    strings: "Hello World",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let recipe = document.querySelector("#form");
recipe.addEventListener("submit", getRecipe);
