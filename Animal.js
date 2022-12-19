class Animals {
  constructor(t, b) {
    if (this.constructor === Animals) {
    }
    // this is a temperature classification based on 'cold-blooded' or 'warm-blooded'
    this.temperature = t;
    // this is a bone classification based on 'verterbrates' or 'invertebrates
    this.bone = b;
  }
  eat() {
    console.log("all animals eat");
  }

  growth() {
    console.log("all animals grow");
  }
  info() {
    console.log(
      "This is a " + this.temperature + ", and also It is a " + this.bone
    );
  }
  move() {
    console.log("All animals move");
  }
}

class Invertebrate extends Animals {
  #isMulticelluar;
  #hasExoskeleton;
  #hasNoCellWall;
  constructor(t, b, isMulticelluar, Exoskeleton, hasNoCellWall) {
    super(t, b);
    this.isMulticelluar = isMulticelluar;
    this.Exoskeleton = Exoskeleton;
    this.hasNoCellWall = hasNoCellWall;
  }
  properties() {
    if ((this.#isMulticelluar = true)) {
      console.log("invertebrates are multicellular");
    }
    if ((this.#hasExoskeleton = true)) {
      console.log("invertebrates have exoskeleton");
    }
    if ((this.#hasNoCellWall = true)) {
      console.log("invertebrates has no cell wall");
    }
  }
  getproperties() {
    return this.properties;
  }
}

const invertebrate = new Invertebrate();
invertebrate.breathe();
invertebrate.growth();
invertebrate.reproduce();
//invertebrate.properties();

class Vertebrates extends Animals {
  #hasJointedAppendages;
  #isSegmented;
  #isBilaterallySegmented;
  #hasOpenCirculatorySystem;
  constructor(
    t,
    b,
    hasJointedAppendages,
    isSegmented,
    isBilaterallySegmented,
    hasOpenCirculatorySystem
  ) {
    super(t, b);
    this.#hasJointedAppendages = hasJointedAppendages;
    this.#isSegmented = isSegmented;
    this.#isBilaterallySegmented = isBilaterallySegmented;
    this.#hasOpenCirculatorySystem = isBilaterallySegmented;
  }

  properties() {
    if ((this.#hasJointedAppendages = true)) {
      console.log("vertebrates has jointed Appendages");
    }
    if ((this.#isSegmented = true)) {
      console.log("vertebrates are segmented");
    }
    if ((this.#isBilaterallySegmented = true)) {
      console.log("vertebrates are bilaterlly segmented");
    }
    if ((this.#hasOpenCirculatorySystem = true)) {
      console.log("vertebrates has open Circulatory system");
    }
  }
}

const vertebrates = new Vertebrates();
vertebrates.properties();
vertebrates.growth();

class Antropoda extends Invertebrate {
  constructor(t, b, coldblooded) {
    super(t, b);
    this.coldblooded = coldblooded;
  }
  temp() {
    console.log("anthropodas are cold-blooded and also invertebrates");
  }
  move() {
    console.log("anthropoda flies");
  }
}
const anthropoda = new Antropoda("cold-blooded", "invertebrates");
//anthropoda.getproperties();
anthropoda.info();
anthropoda.temp();
anthropoda.move();

class Fish extends Vertebrates {
  constructor(t, b) {
    super(t, b);
  }
  temp() {
    console.log("fish are cold-blooded and also vertebrates");
  }
  move() {
    console.log("fishes swims");
  }
}
const fish = new Fish();

fish.temp();
fish.move();

class Amphibians extends Vertebrates {
  constructor(t, b) {
    super(t, b);
  }
  temp() {
    console.log("Amphibians are cold-blooded and also vertebrates");
  }
  move() {
    console.log("Amphibians moves by jumping");
  }
}
const amphibians = new Amphibians();
//amphibians.properties();
amphibians.temp();
amphibians.move();

class Reptiles extends Vertebrates {
  constructor(t, b) {
    super(t, b);
  }
  temp() {
    console.log("Reptiles are cold-blooded and also vertebrates");
  }
  move() {
    console.log("Reptiles moves by crawling");
  }
}
const reptile = new Reptiles();
//reptile.properties();
reptile.temp();
reptile.move();

class Aves extends Vertebrates {
  constructor(t, b) {
    super(t, b);
  }
  temp() {
    console.log("Aves are warm-blooded and also vertebrates");
  }
  move() {
    console.log("Aves moves by flying");
  }
}
const aves = new Aves();
aves.temp();
aves.move();

class Mammals extends Vertebrates {
  constructor(t, b) {
    super(t, b);
  }
  temp() {
    console.log("Mammals are warm-blooded and also vertebrates");
  }
  move() {
    console.log("Mammals moves by walkings");
  }
}
const mammals = new Mammals();
//mammals.properties();
mammals.temp();
mammals.move();
