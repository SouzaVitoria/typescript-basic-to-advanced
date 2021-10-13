"use strict";
let user = { id: "user-344" };
let product = { id: "product-123" };
let ponto2D = { x: 0, y: 2 };
let ponto3D = { x: 0, y: 2, z: 1 };
user = product;
product = user;
ponto2D = ponto3D;
// ponto3D = ponto2D;
