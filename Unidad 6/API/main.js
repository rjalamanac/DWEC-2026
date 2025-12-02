let favoritePokemon = [
  "Eevee",
  "Swampert",
  "Snorlax",
  "Garchomp",
  "Croagunk",
  "Rayquaza",
  "Grookey",
];
const URI = "https://pokeapi.co/api/v2/pokemon/";

for (let index = 0; index < favoritePokemon.length; index++) {
  const element = favoritePokemon[index];
  fetch(URI + element).then(async (response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let pokemon = await response.json();
    let imagen = document.createElement("img");
    imagen.src = pokemon.sprites.back_shiny;
    document.getElementById("idMain").appendChild(imagen);
  });
}

console.log("Hola");
