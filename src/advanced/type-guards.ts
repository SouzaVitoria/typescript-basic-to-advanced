type QuadradoGuards = {
  size: number
}

type RetanguloGuards = {
  width: number,
  height: number
}

type FormaGuards = QuadradoGuards | RetanguloGuards;

// se não quiser verificar se tem um propriedade no objeto ex: "size" in formae e não querer modificar o type (adicionando uma prop diferente pra cada), 
// da pra fazer com type guards, a legibilidade é melhor (pode colocar boolean também)

function isQuadrado(forma: FormaGuards): forma is QuadradoGuards {
  return "size" in forma;
}


function area(forma: FormaGuards) {
  //Verifica a propriedade, se a props/parametro tiver tamanho, significa que é um quadrado
  if (isQuadrado(forma)) {
    return forma.size * forma.size;
  }

  if ("width" in forma) {
    return forma.width * forma.height;
  }
}

type loadingPerson = {
  name: string,
  birthday: Date
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const person = loadingPerson();
assert(person != null, "Não é possível carregar pessoa");
console.log("Name: ", person.name)