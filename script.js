const URL = "https://pokeapi.co/api/v2/pokemon?limit=60&offset=60";

window.onload = async () => {
  const res = await fetch(URL);
  const pokemon = await res.json();
  console.log(pokemon.next);
};
