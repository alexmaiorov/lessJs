let a = [2,4,5,6,3,6,3]
function summul(arr){
    let b=0
    arr.forEach (element => {
        if (element%2==0){
        b=b+(element*element)
        }
    })
    return b
}
console.log(summul(a))