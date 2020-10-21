let m = 999;
let obj = {
    num: +prompt('Enter number'),
    units: 0,
    tens: 0,
    hundreds: 0,
};

if (obj.num < 10) {
    obj.units = obj.num;
} else if (obj.num <= 999) {
    obj.units = obj.num % 10;
    obj.tens = Math.floor(obj.num / 10 % 10);
    obj.hundreds = Math.floor(obj.num / 100);
} else {
    obj.num = 0; 
    console.log('Error number');
}
console.log(obj);


// let num = [...'121']
// num = ['1', '2', '1']
// let obj = {
//     units: +num[2],
//     tens: +num[1],
//     hundreds: +num[0],
// }