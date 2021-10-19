type Ponto2Dd = {
  x: number,
  y: number
}

type Ponto3Dd = Ponto2Dd & {
  z: number
}

type Pontos2De3D = Ponto2Dd & Ponto3Dd;

function pontos2De3D(ponto: Ponto2Dd & Ponto3Dd) {

}