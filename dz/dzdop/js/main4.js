const object1 = {
    a: 1,
    b: 'dfd',
    c: 3
  }

function multiplyNumeric(obj){
for (key in obj){
    if (typeof obj[key] ==='number'){
        obj[key]=obj[key]*2
    }
}
return obj
}
 console.log(multiplyNumeric(object1))
