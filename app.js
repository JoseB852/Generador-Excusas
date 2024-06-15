
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


let a = who[Math.floor(Math.random() * 4)]
let b = action[Math.floor(Math.random() *3)]
let c = what[Math.floor(Math.random() *3)]
let d = when[Math.floor(Math.random() *5)]

let result = a + " " + b + " " + c + " " + d
console.log(result)