function prim(num){
        let c=2
        while(c<=Math.sqrt(num)){
            if (num%c===0){
                return false     
        } 
        c++ 
        }       
  return true  
}
let z=2,
    a=[]
while (z<=100){
    if (prim(z)) a.push(z)
    z++
    }
console.log(a) 
