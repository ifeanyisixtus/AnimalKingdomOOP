/*class AnimalGroup {
  _animalGroup;

  constructor(group) {
    this._animalGroup = group.toLowerCase();
  }

  setGroup(type) {
    if (type !== this._animalGroup) {
      console.log(`ERROR: Invalid Animal Group`);
    }
    this._animalGroup;
  }

  getGroup() {
    return this._animalGroup;
  }

  animalGroup() {
    if (this._animalGroup === "anthropoda") {
      return `${this.name} belongs to the Anthropoda family.\nThey generally come without Backbones and\nThey are Cold-Blooded animal.`;
    } else if (this._animalGroup === "fish") {
      return `${this.name} belongs to the Fish family.\nThey generally come with Backbones and\nThey are Cold-Blooded animal.`;
    } else if (this._animalGroup === "amphibia") {
      return `${this.name} belongs to the Amphibia family.\nThey generally come with Backbones and\nThey are Cold-Blooded animal.`;
    } else if (this._animalGroup === "reptiles") {
      return `${this.name} belongs to the Reptiles family.\nThey generally come with Backbones and\nThey are Cold-Blooded animal.`;
    } else if (this._animalGroup === "aves") {
      return `${this.name} belongs to the Aves family.\nThey generally come with Backbones and\nThey are Warm-Blooded animal.`;
    } else if (this._animalGroup === "mammals") {
      return `${this.name} belongs to the Mammals family.\nThey generally come with Backbones and\nThey are Warm-Blooded animal.`;
    } else {
      return `Error: Expected an input with Valid animal group and an animal name`;
    }
  }
}

class Animal extends AnimalGroup {
  constructor(group, name) {
    super(group);
    this.name = name;
  }

  hasBackboneOrNot() {
    if (this._animalGroup !== "anthropoda") {
      return `${this.name} has backbones`;
    }
    esle;
    return `${this.name} has no backbones`;
  }

  isWarmOrColdBLooded() {
    if (this._animalGroup === "aves" || this._animalGroup === "mammals") {
      return `${this.name} is a warm-blooded animal`;
    } else {
      return `${this.name} is a cold-blooded animal`;
    }
  }
}
// }

const cat = new Animal("Mammal");

console.log(cat);
cat.setGroup("mammals");
console.log(cat.animalGroup());

const fish = new Animal("Fish", "Fish");

console.log(fish);
// fish.setGroup("aves");

console.log(fish.hasBackboneOrNot());
console.log(fish.isWarmOrColdBLooded());

console.log(fish.animalGroup());

const eagle = new Animal("Aves", "eagle");
console.log(eagle.hasBackboneOrNot());
console.log(eagle.isWarmOrColdBLooded());

console.log(eagle.animalGroup());

const tortoise = new Animal("Reptile", "tortoise");
console.log(tortoise.hasBackboneOrNot());
console.log(tortoise.isWarmOrColdBLooded());

console.log(tortoise.animalGroup());

const frog = new Animal("Amphibia", "frog");
console.log(frog.hasBackboneOrNot());
console.log(frog.isWarmOrColdBLooded());
console.log(frog.animalGroup());
*/

function VisaCardNumber(inputtxt) {
  const cardno = /^4[0-9]{12}(?:[0-9]{3})?$/;
  return cardno.test(inputtxt);
}

function validateVisaCardNumber(cardnumber) {
  let cardType = "invalid card";
  if (VisaCardNumber(cardnumber)) {
    cardType = " valid visa card";
  }
  return cardType;
}

//console.log(VisaCardNumber);
const valid = validateVisaCardNumber(4411111123237);
console.log(valid);
