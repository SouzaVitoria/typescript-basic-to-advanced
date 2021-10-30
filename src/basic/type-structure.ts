type User = { id: string };
type Product = { id: string };
type Ponto2D = { x: number, y: number };
type Ponto3D = { x: number, y: number, z: number };

let user: User = { id: "user-344" };
let product: Product = { id: "product-123" };
let ponto2D: Ponto2D = { x: 0, y: 2 }
let ponto3D: Ponto3D = { x: 0, y: 2, z: 1 }

user = product;
product = user;

ponto2D = ponto3D;
// ponto3D = ponto2D;

