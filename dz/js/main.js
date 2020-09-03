let tf = (tc) =>(9/5)*tc+32
console.log(tf(10))



let oper = (a,b) => {
    if (a>=0|b>=0) {
        console.log(a-b)
    } 
    else if (a<0|b<0) {
        console.log(a*b)
    }
    else {console.log(a+b)}
}
console.log(oper(10,-40))



function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
let a = getRandomInRange(0, 15)
switch (a) {
    case 0:
        console.log (0)
    case 1:
        console.log (1)
    case 2:
        console.log (2)
    case 3:
        console.log (3) 
    case 4:
        console.log (4) 
    case 5:
        console.log (5)   
    case 6:
        console.log (6)  
    case 7:
        console.log (7)
    case 8:
        console.log (8)
    case 9:
        console.log (9) 
    case 10:
        console.log (10)
    case 11:
        console.log (11)
    case 12:
        console.log (12) 
    case 13:
        console.log (13)
    case 14:
        console.log (14) 
    case 15:
        console.log (15)
    default:    
  }


let sum = (a,b) => {
    console.log(a+b)
}
let sub = (a,b) => {
    console.log(a-b)
}
let mul = (a,b) => {
    console.log(a*b)
}
let div = (a,b) => {
    if (b==0) {console.log('error')
    }
    else {console.log(a/b)}
}
console.log(sum(10,5))
console.log(sub(10,5))
console.log(mul(10,5))
console.log(div(10,5))


function mathOperation(arg1, arg2, operation) {
        switch (operation){
        case sum:
            console.log(sum(arg1,arg2)) 
        break  
        case sub:
            console.log(sub(arg1,arg2)) 
        break  
        case mul:
            console.log(mul(arg1,arg2)) 
        break  
        case div:
            console.log(div(arg1,arg2)) 
        break 
    }
}
console.log(mathOperation(10,10,mul))