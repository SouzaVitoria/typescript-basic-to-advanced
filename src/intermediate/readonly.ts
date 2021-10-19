type Ponto = {
  readonly x: number,
  readonly y: number
}

const ponto: Ponto = {
  x: 0,
  y: 0
}

// Para redeclarar a constante ele não deixa, mas para alterar os valores da proprieda ele deixa

// ponto= {x: 1, y:1}
// ponto.x = 1;
// ponto.y = 1;

class AnimalRe {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const bird = new AnimalRe("ave");
// bird.name = "Rai";