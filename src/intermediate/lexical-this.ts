class Person {
  private _age: number;
  constructor(_age: number) {
    this._age = _age;
  }

  old = () => {
    this._age++;
  }

  age() {
    return this._age;
  }
}

const person = new Person(0);
const old = person.old;
old()
console.log("idade: ", person.age())