"use strict";
/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "number" && typeof input2 === "string") {
        return input1 + input2;
    }
}
console.log(combine(1, 2));
