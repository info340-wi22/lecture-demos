'use strict';

const data = {value: "other"}
console.log(data);

export function foo() { return 'foo'; } //named export

export function bar() { return 'bar'; }

//will not be available (a "private" function)
function baz() { return 'baz'; }