function prim(num){
    let a=2
    while (a<=num) { 
        let c=2
        while(c<a && c<=Math.sqrt(num)){
            if (num%c===0 && num!=c){
                c=a++
                return false     
        } else {
            c++        
        }
    }
    a++
    }
  return true  
}
z=2
while (z<=100){
    if (prim(z)) console.log(z)
    z++
}
