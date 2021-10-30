type pontoCardeal = "Norte" | "Sul" | "Leste" | "Oeste";
let direction: pontoCardeal;

direction = "Norte";
// direction = "n0r7e";

function move(distanceMm: number, direction: pontoCardeal) {
  console.log(distanceMm, direction)
}