function sumInput(){
    let a
    let b=[]
    while (true) {
        a=prompt('Введитк число для сложения')
        if (isNaN(a)|| a===""|| a===null) break
        b.push(+a)
    }
    let sum=0
    b.forEach(element => sum=sum+element)
    return sum
}
alert( sumInput() );


