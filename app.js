fetch("products.json")
.then(response => response.json())
.then(products => {

const container = document.getElementById("products");

products.forEach(product => {

const div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<h3>${product.name}</h3>
<p>Marka: ${product.brand}</p>
<p>Kategoria: ${product.category}</p>
<p>Cena: ${product.price} €</p>
`;

container.appendChild(div);

});

});
