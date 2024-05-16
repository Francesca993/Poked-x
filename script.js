const pokemonURL = "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=60";
const pokemon = [];

async function fetchData(url) {
  try {
    // Eseguiamo la richiesta HTTP con fetch
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const pokemonLibrary = await response.json();
    // Restituiamo i dati ottenuti
    return pokemonLibrary.map(
      (item) =>
        `
  <div class="misureCard backgroundCard">
                    <div class=" d-flex flex-wrap flex-column align-item-center text-center  ">
                        <div class="immagineCard ">
                            <img src="" alt="">
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                            ${item.name}
                            </p>
                        </div>
                    </div>
    </div>
    `
    );
  } catch (error) {
    // Gestiamo eventuali errori
    console.error("Fetch error:", error);
  }
}

//utilizzo della fuzione fetchdata
window.onload = fetchData(pokemonURL).then((pokemon) => {
  console.log(pokemon.results);
});

//STAMPA I RISULTATI
const contenitoreHTML = document.querySelector("#inner");

/*
window.onload = async () => {
  const res = await fetch(URL);
  const pokemon = await res.json();
  pokemon.map((element) => {
    console.log(element);
  });
};

*/
