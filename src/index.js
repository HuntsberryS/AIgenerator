function getRecipe(event) {
  event.preventDefault();

  let apiKey = "7036a98t226cf2o3c044afd3b96a58b7";
  let cuisineChoice = document.querySelector("#cuisine");
  let prompt = `generate a simple ${cuisineChoice.value} recipe. Please make sure to include required ingredients at the beginning of the recipe. Please do not include any special characters aside from punctuation. Add <br /> <br /> before writing the recipe.`;
  let context =
    "You are a wholesome home cook who loves sharing easy recipes with people. Please provide simple, easy to follow responses that are concise";
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
