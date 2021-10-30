// Type

type Ponto2DInterface = { x: number, y: number };
type Ponto3DInterface = Ponto2DInterface & { z: number };

export const pontoType: Ponto3DInterface = { x: 0, y: 0, z: 0 }

// Interface

interface IPonto2D {
  x: number, y: number
}

interface IPonto3D extends IPonto2D {
  z: number
}

export const pontoInterface: Ponto3DInterface = { x: 0, y: 0, z: 0 }

