import Typewriter from "typewriter-effect/dist/core";

function getRecipe(event) {
  event.preventDefault();

  let recipeDisplay = document.querySelector("#recipespot");

  new Typewriter("#recipespot", {
    strings: ["Hello", "World"],
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

let recipe = document.querySelector("#form");
recipe.addEventListener("click", getRecipe);
