
let a = +prompt('Vvedite pervoe chislo'), b = +prompt('Vvedite vtoroe')
if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else if (a * b < 0) {
    console.log(a + b)
}