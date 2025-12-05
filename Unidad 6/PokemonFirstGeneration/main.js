const select = document.getElementById("idSelect");
const DITTO_SRC =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png";
fetch("https://pokeapi.co/api/v2/type")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Something went wrong on API server!");
    }
    return response.json();
  })
  .then((response) => {
    for (const element of response.results) {
      const option = document.createElement("option");
      option.value = element.name;
      option.textContent = element.name;
      select.appendChild(option);
    }
  })
  .catch((error) => {
    console.error(error);
  });

async function showPokemon(event) {
  removeChildren(document.getElementById("idResult"));
  const selector = document.getElementsByTagName("select")[0];
  event.preventDefault();
  await fetch(
    `https://pokeapi.co/api/v2/type/${selector[selector.selectedIndex].value}`
  )
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Something went wrong on API server!");
      }
      return response.json();
    })
    .then(async (response) => {
      await showPokemonByGeneration(response, isGeneratioOne);
      await showPokemonByGeneration(response, isGeneratioTwo);
      await showPokemonByGeneration(response, isGeneratioThree);
      await showPokemonByGeneration(response, isGeneratioFour);
      await showPokemonByGeneration(response, isGeneratioFive);
      await showPokemonByGeneration(response, isGeneratioSix);
      await showPokemonByGeneration(response, isGeneratioSeven);
      await showPokemonByGeneration(response, isGeneratioEight);
      await showPokemonByGeneration(response, isGeneratioNine);
    })
    .catch((error) => {
      console.error(error);
    });
}

function removeChildren(section) {
  while (section.firstChild) {
    section.removeChild(section.lastChild);
  }
}
function filterByGeneration(response, func) {
  return response.pokemon.filter((pokemon) =>
    func(parseInt(pokemon.pokemon.url.split("/")[6]))
  );
}
async function showPokemonByGeneration(response, generationFilter) {
  const pokemonGeneration = filterByGeneration(response, generationFilter);

  if (pokemonGeneration.length <= 0) {
    addSpritePokemonSection(DITTO_SRC);
    return;
  }

  const randomPokemonGeneration =
    pokemonGeneration[Math.floor(Math.random() * pokemonGeneration.length)];

  const spritePokemon = await getSpriteFromPokemon(
    randomPokemonGeneration.pokemon.url
  );
  addSpritePokemonSection(spritePokemon);
}

function addSpritePokemonSection(src) {
  const imgElement = document.createElement("img");
  imgElement.src = src;
  document.getElementById("idResult").appendChild(imgElement);
}

async function getSpriteFromPokemon(urlPokemon) {
  return await fetch(urlPokemon)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Something went wrong on API server!");
      }
      return response.json();
    })
    .then((response) => {
      return response.sprites.front_shiny;
    })
    .catch((error) => {
      console.error(error);
    });
}

document.getElementById("idForm").addEventListener("submit", showPokemon);

function isGeneratioOne(number) {
  return number <= 151;
}
function isGeneratioTwo(number) {
  return number >= 152 && number <= 251;
}
function isGeneratioThree(number) {
  return number >= 252 && number <= 386;
}
function isGeneratioFour(number) {
  return number >= 387 && number <= 493;
}
function isGeneratioFive(number) {
  return number >= 494 && number <= 649;
}
function isGeneratioSix(number) {
  return number >= 650 && number <= 721;
}
function isGeneratioSeven(number) {
  return number >= 722 && number <= 809;
}
function isGeneratioEight(number) {
  return number >= 810 && number <= 905;
}
function isGeneratioNine(number) {
  return number >= 906 && number <= 1025;
}
