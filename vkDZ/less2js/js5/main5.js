let num = 1;
let arrNum = [];

while (num < 100) {
    if (num == 1) {
        arrNum.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (num % i !== 0){
            i +=1;
            result +=1;
        }
        if (result == num) {
            arrNum.push(result);
        }
    }
    num += 1;
}
console.log(arrNum);