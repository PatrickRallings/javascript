const gSmithApples = document.querySelector("li").nextElementSibling;
gSmithApples.innerHTML = "Granny Smith Apples";

document.querySelector("ul").lastElementChild.remove();

const kombucha = document.createElement("li");
kombucha.innerHTML = "Kombucha";
const shopCart = document.querySelector("ul");
shopCart.appendChild(kombucha);

document.querySelector("ul").innerHTML = "";
const newCart = ["protein bars", "almonds", "peanut butter"];
let i = 0;
while (i < newCart.length) {
  let newItem = document.createElement("li");
  newItem.innerHTML = newCart[i];
  shopCart.appendChild(newItem);
  i++;
}

document.querySelector("li").nextElementSibling.className += "important";
