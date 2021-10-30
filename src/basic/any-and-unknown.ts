let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123
exampleUnknown = "Ola"

// unknown
exampleAny = 456
exampleUnknown = "Mundo"

//any
exampleAny.permite.qualquer.coisa.imagine()
let anySetBool: boolean = exampleAny

//unknown
if (typeof exampleUnknown == "string") {
  exampleUnknown.trim()
}

if (typeof exampleUnknown == "boolean") {
  let unknownSetBool: boolean = exampleUnknown
}
