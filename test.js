class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteNumber = favoriteNumber;
      this.favoriteFoods = favoriteFoods;
      this.family = [];
  }
}

let fang = new Person("Fang", "Lu", "Blue", 5, ['sushi', 'wings']);
let mark = new Person("Mark", "Schledzewski", "Green", 5, ['pizza', 'pasta']);
// console.log(fang);

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



Person.prototype.addToFamily = function(addPers) {
  if (!(addPers instanceof Person)){
  return ("Person is on the list");
  }else {
      for(var i=0; i < this.family.length;i++){
          if(this.family[i] == addPers)
          return this.family.length;
      }
      this.family.push(addPers)
}
}

fang.addToFamily(mark);
console.log(fang.family[0])
console.log(fang.toString())