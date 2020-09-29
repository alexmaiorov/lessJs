let operation = prompt('Введите название операции'),
arg1 = +prompt('Введите первое число'),
arg2 = +prompt('Введите второе число');
function mathOperation(arg1, arg2, Operation){
    switch (Operation){
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
    }
}
console.log(mathOperation(arg1, arg2, Operation));