// class Cat() {
//   miar(){
//     console.log("miado")
//   }
// }

// class Dog() {
//   latir(){
//     console.log("latido")
//   }
// }

// type Animal = Cat | Dog;

// function comunicar(animal: Animal) {
//   if (animal instanceof Cat) {
//     animal.miar();
//   }

//   if (animal instanceof Dog) {
//     animal.latir()
//   }
// }

// type Quadrado = {
//   tamanho: number
// }

// type Retangulo = {
//   largura: number,
//   altura: number
// }

// type Forma = Quadrado | Retangulo;

// function area(forma: Forma) {
//   //Verifica a propriedade, se a props/parametro tiver tamanho, significa que é um quadrado
//   if ("tamanho" in forma) {
//     return forma.tamanho * forma.tamanho;
//   }

//   if ("largura" in forma) {
//     return forma.largura * forma.largura;
//   }
// }

// area({ tamanho: 2 });
// area({ largura: 2, altura: 3 });


type Quadrado = {
  tipo: "quadrado",
  tamanho: number
}

type Retangulo = {
  tipo: "retangulo"
  largura: number,
  altura: number
}

type Forma = Quadrado | Retangulo;

function area(forma: Forma) {
  //Verifica a propriedade, se a props/parametro tiver tamanho, significa que é um quadrado
  if (forma.tipo === "quadrado") {
    return forma.tamanho * forma.tamanho;
  }

  if (forma.tipo === "retangulo") {
    return forma.largura * forma.largura;
  }
}