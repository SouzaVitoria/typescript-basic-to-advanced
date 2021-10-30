type Ponto = {
  x: number, y: number
}

let ponto: Ponto;

function inicializator() {
  ponto = { x: 0, y: 0 }
}

inicializator();
console.log("Após ser inicializado ", ponto!.x, ponto!.y);


type PersonNonNull = {
  name: string,
  email?: string | null | undefined
}

function sendEmail(email: string) {
  console.log("email");
}

function validationEmail(person: PersonNonNull) {
  if (person.email == null) throw new Error("não possui email");
}

function contact(person: PersonNonNull) {
  validationEmail(person)
  sendEmail(person.email!)
}