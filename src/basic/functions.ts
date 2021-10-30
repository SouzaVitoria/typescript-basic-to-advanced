function soma(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log("LOG", message);
}

function somaValues(...values: Array<number>): number {
  return values.reduce((prev, current) => {
    return prev + current;
  })
}
function somaValuesTwo(...values: number[]): number {
  return values.reduce((prev, current) => {
    return prev + current;
  })
}

somaValues(1, 2); // value 3
somaValues(1, 2, 3); // value 6

type Add = (a: number, b: number) => number;

let add: Add;
add = function (a: number, b: number) {
  return a + b;
}