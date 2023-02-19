const array = [1, 2, 3, 4, 5];
console.log(array.length);

let a = 4;
let b = a;
console.log(b);
console.log(a);

a = 5;
console.log(a);
console.log(b);
b = a;

const names = ['Ola', 'Fedir', 'Nastia', 'Mary'];

for (let i = 0; i < names.length; i += 1) {
    names[i] += '!';
    console.log(names[i]);
}


const logins = ['m4angoDoge', 'aj4xth3m4n', 'kiwidab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message;