const storeOwners = [
  { Name: "Charles", Stores: 1 },
  { Name: "Sally", Stores: 1 },
  { Name: "Cassandra", Stores: 1 },
  { Name: "DannyShavez", Stores: 1, location: "in NM" },
];

const listNumberOfStores = storeOwners.reduce(function (sum, storeOwners) {
  return sum + storeOwners.Stores;
}, 0);

let totalLocations = listNumberOfStores;
function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (totalLocations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length - 1; i++) {
    let person = storeOwners[i].Name;
    console.log("Yes, " + person + " has one");
  }
}

tellMeMyStores();
hasStore();

let mister = storeOwners[3];

let whereHeLives = mister.location;
console.log(
  "Yes, " + mister.Name + " that lives " + whereHeLives + " owns one too."
);
