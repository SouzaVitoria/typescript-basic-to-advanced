"use strict";
class AnimalTwo {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMm) {
        console.log(`${this.name} se moveu ${distanceInMm}`);
    }
}
