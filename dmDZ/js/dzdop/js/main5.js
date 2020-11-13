let calc = {
    num1:0,
    num2:0,
    res:0,
    sum:0,
    sub:0,
    mul:0,
    div:0,

    _getNum() {
        this.num1 = +prompt('Введите первое число')
        this.num2 = +prompt('Введите второе число')
    },
    _getSum() {
        this.sum = this.num1 + this.num2
        return this.sum
    },
    _getSub() {
        this.sub = this.num1 - this.num2
        return this.sub
    },
    _getMul() {
        this.mul = this.num1 * this.num2
        return this.mul
    },
    _getDiv() {
        this.div = this.num1 / this.num2
        return this.div
    }
}
calc._getNum()
console.log(calc._getSum())
console.log(calc._getSub())
console.log(calc._getMul())
console.log(calc._getDiv())