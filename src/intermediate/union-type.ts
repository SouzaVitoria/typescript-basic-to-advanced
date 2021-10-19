function formatCode(input: string | string[]) {
  let row = "";
  if (typeof input === "string") {
    row = input.trim();
  } else {
    row = input.map((x: string) => x.trim()).join("");
  }
  return row;
}

console.log(formatCode("olá ")); //Olá
console.log(formatCode(["olá ", "mundo "])); // Olá mundo
