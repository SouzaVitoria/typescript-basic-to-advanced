class Animal {
  protected name: string

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMm: number): void {
    console.log(`${this.name} se moveu ${distanceInMm}`)
  }
}

let cat = new Animal("Cat");
cat.move(10)

class Bird extends Animal {
  fly(distanceInMm: number): void {
    console.log(`${this.name} se moveu ${distanceInMm}`)
  }
}