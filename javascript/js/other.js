console.log("other.js")

//console.log(person);

export function foo() { console.log('foo'); } //named export
export function bar() { console.log('bar'); } //named export
function baz() { console.log('baz'); } //named export

export default function sayHello() { 
    console.log("Hello other world;")
}
