let shopList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shopList.push("fruit loops");

let index = shopList.indexOf("coffee");
shopList[index] = "fair trade coffee";

index = shopList.indexOf("chips");
shopList[index] = "rice";

index = shopList.indexOf("salsa");
shopList[index] = "beans";

let shopCart = [];

let listLength = shopList.length;
let lastList = shopList[listLength - 1];

shopCart.push(lastList);
shopList.pop();

while (shopList.length >= 1) {
  listLength = shopList.length;
  lastList = shopList[listLength - 1];
  shopCart.push(lastList);
  shopList.pop();
}

shopCart.sort();

shopCart.reverse();

let shopCartString = shopCart.toString()

console.log(shopCartString);
