console.log("other module");

export function foo() {
    console.log('foo called');
}

export function bar() { console.log("called bar"); }

//will not be available (a "private" function)
function baz() { return 'baz'; }


export default function other() {
    console.log('Hello other world!');
}
