function game() {    
    let ansv1 = prompt('2+2=?')
    let ansv2 = prompt('В чём измеряется сила?')
    let rlAnsv1 = '4'
    // console.log(rlAnsv1)
    let rlAnsv2 = 'Правда'
    let truAnsv = 0
    // console.log(ansv1===rlAnsv1)
        truAnsv = (ansv1===rlAnsv1) ? ++truAnsv : truAnsv 
        truAnsv = (ansv2===rlAnsv2) ? ++truAnsv : truAnsv 
    return truAnsv
}
console.log(game())
