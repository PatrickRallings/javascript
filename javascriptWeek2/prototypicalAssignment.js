function Person(
  firstName,
  lastName,
  favoriteColor,
  favoriteNumber,
  favoriteFoods
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

let peter = new Person("Peter", "O'Leary", "Green", 42, ["pasta", "pizza"]);
let paul = new Person("Paul", "O'Lay", "Black", 87, ["chicken", "beef"]);

Person.prototype.fullName = function fullName() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.toString = function toString() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addtoFamily = function (addPerson) {
  if (!(addPerson instanceof Person)) {
    return ("Person is already listed.");
  } else {
    for (var i = 0; i < this.family.length; i++) {
      if (this.family[i] == addPerson)
      return this.family.length;
    }
    this.family.push(addPerson);
  }
}

peter.addtoFamily(paul);
console.log(peter.family)
console.log(peter)