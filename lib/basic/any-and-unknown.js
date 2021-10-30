"use strict";
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleUnknown = "Ola";
// unknown
exampleAny = 456;
exampleUnknown = "Mundo";
//any
exampleAny.permite.qualquer.coisa.imagine();
let anySetBool = exampleAny;
//unknown
if (typeof exampleUnknown == "string") {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
    let unknownSetBool = exampleUnknown;
}
