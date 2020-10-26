let regText = new RegExp('[xyz]', 'i')
let regText2 = /123/g

let str = '123 abc 456'


console.log(regText2.test(str));
console.log(regText.test(str));

console.log(str.match(regText2));


console.log(str.replace(regText2, '321'));

str = '1231 453 1444441 333523'

let regexp = /1.+?1/g

console.log(str.match(regexp));