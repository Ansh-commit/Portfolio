const product = [
  {
    category: "Smartwatch",
    name: "Apple watch",
    prise: "$1200",
    description: "It's sut on you",
  },

  {
    category: "Television",
    name: "LG Television",
    prise: "$2400",
    description: "Very nice",
  },

  {
    category: "smartphone",
    name: "infinix note 30 5g",
    prise: "$3000",
    description: "Flaship phone",
  },

  {
    category: "smartwatch",
    name: "Apple watch",
    prise: "$1200",
    description: "It's sut on you",
  },
];
const data = product
  .map(
    (item) =>
      ` <div class="card">
    <h3>${item.name}</h3>
    <br>
    <p>${item.description}</p>
    <br>
    <h1>${item.prise}</h1>
    </div>`
  )
  .join("");

console.log(data);

document.getElementById("Card").innerHTML = data;

function filterProduct() {
  const productCategory = document.getElementById("product-category").value;
  console.log(productCategory);
}
