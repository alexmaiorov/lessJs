let str = prompt('Введите текст');
let regexp = /^'|(\s)'|'(\s)|'$/g;

console.log(str.replace(regexp, '$1"$2'));