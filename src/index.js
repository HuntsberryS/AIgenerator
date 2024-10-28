function getRecipe(event) {
  event.preventDefault();

  let apiKey = "7036a98t226cf2o3c044afd3b96a58b7";
  let cuisineChoice = document.querySelector("#cuisine");
  let prompt = `generate a simple ${cuisineChoice.value} recipe with the recipe name included at the top, followed by a list of ingredients required and then the steps to make the meal. The test should have no special characters in it and follow thhis output: Recipe name <br/> <br/> Ingredients: (list of ingredients numbered) <br/> <br/>. Instructions: (steps to prepare meal) numbered. `;
  let context =
    "You are a wholesome home cook who loves sharing easy recipes with people. Please provide simple, easy to follow responses and include recipes that may not be well known.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(generateRecipe);
}

function generateRecipe(response) {
  new Typewriter("#recipespot", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 0.5,
  });
}

let recipe = document.querySelector("#form");

recipe.addEventListener("submit", getRecipe);
