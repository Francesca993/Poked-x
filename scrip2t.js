const url = "https://striveschool-api.herokuapp.com/books";
let libri = [];

fetch(url)
  .then((response) => response.json())
  .then((libriOttenuti) => {
    let contenitore = document.getElementById("book-result");
    contenitore.innerHTML = libriOttenuti
      .map((libro) => {
        return ` 
      
<div class="card m-3  d-flex justify-content-center ">
   <div class="bgkCard">
    <img src=" ${libro.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${libro.title}</h5>
        <p class="card-text">Prezzo: ${libro.price}€</p>
        <a href="#" class="btn btn-dark" onclick="addCart('${libro.title}','${libro.price})'" >Aggiungi al Carrello</a> <i class="bi bi-cart4"></i>
    </div>
   </div>
</div>
        `;
      })
      .join(" ");
  })

  .catch((error) => {
    console.error("si è verificato un errore" + error);
  });

const addToCart = (title, price) => {
  let contenitore = document.getElementById("lista");
  contenitore.innerHTML = ` 
   <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold"> ${title}</div>
     ' ${price}'
    </div>
  </li>
    
  `;
};
