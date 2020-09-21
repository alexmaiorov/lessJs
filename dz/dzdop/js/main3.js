const object1 = {
    a: 1,
    b: 2,
    c: 3
  }

  const object2 = {
     }

function isEmpty(obj){
    let a=[]
    a = Object.getOwnPropertyNames(obj)
    if (a.length == 0){ return true}
    else {return false}
}

console.log(isEmpty(object1))
console.log(isEmpty(object2))
