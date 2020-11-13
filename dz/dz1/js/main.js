let tf = (tc) =>(9/5)*tc+32
console.log(tf(10))



let oper = (a,b) => {
    if (a>=0 && b>=0) {
        return (a-b)
    } 
    else if (a<0 && b<0) {
        return (a*b)
    }
    else {return (a+b)}
}
console.log(oper(10,-40))



function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
let a = getRandomInRange(0, 15)
switch (a) {
    case 0:
        console.log (a++)
    case 1:
        console.log (a++)
    case 2:
        console.log (a++)
    case 3:
        console.log (a++) 
    case 4:
        console.log (a++) 
    case 5:
        console.log (a++)   
    case 6:
        console.log (a++)  
    case 7:
        console.log (a++)  
    case 8:
        console.log (a++)  
    case 9:
        console.log (a++)  
    case 10:
        console.log (a++)  
    case 11:
        console.log (a++)  
    case 12:
        console.log (a++)  
    case 13:
        console.log (a++)  
    case 14:
        console.log (a++)  
    case 15:
        console.log (a++)  
    break
    default: 
    console.log('wrong number')  
}


let sum = (a,b) =>  a+b  
let sub = (a,b) =>  a-b
let mul = (a,b) =>  a*b
let div = (a,b) => {
    if (b==0) {return ('error')
    }
    else {return (a/b)}
}
console.log(sum(10,5))
console.log(sub(10,5))
console.log(mul(10,5))
console.log(div(10,5))


function mathOperation(arg1, arg2, operation) {
        switch (operation){
        case sum:
            return (sum(arg1,arg2)) 
        break  
        case sub:
            return (sub(arg1,arg2)) 
        break  
        case mul:
            return (mul(arg1,arg2)) 
        break  
        case div:
            return (div(arg1,arg2)) 
        break 
        }
}
console.log(mathOperation(10,10,mul))

let c,
    arr2=[],
    arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    c=+prompt ('Введи число от 0 до 15')
if (c < 0 || c > 15 || isNaN(c)){
    console.log('wrong number')
} else {
        switch(a){
            case 0:
                console.log('задание\n'+arr)
                break
            case 15:
                console.log('задание\n'+c)
                break
            default:
                arr2=arr.slice(c)
                console.log('задание\n'+arr2) 
        }
}