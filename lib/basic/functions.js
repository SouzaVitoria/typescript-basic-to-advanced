"use strict";
function soma(a, b) {
    return a + b;
}
function log(message) {
    console.log("LOG", message);
}
function somaValues(...values) {
    return values.reduce((prev, current) => {
        return prev + current;
    });
}
function somaValuesTwo(...values) {
    return values.reduce((prev, current) => {
        return prev + current;
    });
}
somaValues(1, 2); // value 3
somaValues(1, 2, 3); // value 6
let add;
add = function (a, b) {
    return a + b;
};
