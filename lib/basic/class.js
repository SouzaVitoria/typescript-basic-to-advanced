"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMm) {
        console.log(`${this.name} se moveu ${distanceInMm}`);
    }
}
let cat = new Animal("Cat");
cat.move(10);
class Bird extends Animal {
    fly(distanceInMm) {
        console.log(`${this.name} se moveu ${distanceInMm}`);
    }
}
