let sz = "small";
let nm = "Choco Chunks";

sz = "large";
nm = "Crackle Crisps";

sz = "jumbo";
nm = "All My Toffee";

sz = "IAreGe";
nm = "Mint Chip Supreme";

sz = "snack";
nm = "Darkest Cocoa";

if (sz === "small") {
  console.log("This " + nm + " costs $1.00");
} else if (sz === "medium") {
  console.log("This " + nm + " costs $1.75");
} else if (sz === "large") {
  console.log("This " + nm + " costs $2.50");
} else if (sz === "jumbo") {
  console.log("This " + nm + " costs $4.75");
} else {
  console.log("Associate please look up price and check if valid");
}