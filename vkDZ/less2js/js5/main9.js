let str = prompt('Введите текст');
let regexp = /'/g;

console.log(str.replace(regexp, '"'));