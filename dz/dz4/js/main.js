// let a=''
// for (let i=1; i<=20; i++) {
//     a = a + 'x'
//     console.log(a)
// }

let  game = {
    камень: 'ножницы',
    ножницы: 'бумага',
    бумага: 'камень'
}

function compGuess() {
    let arr = ['камень', 'ножницы', 'бумага']
    let i = Math.floor(Math.random()*3)
    return arr[i]
}
 
let choise=prompt('камень, ножницы, бумага'),
    compChoise=compGuess()

for (el in game) {
    if (el == choise){
      if (choise==compChoise){  
        console.log('Ничья'+ compChoise)
        }else if (compChoise==game[el]){
        console.log('Вы выиграли'+ compChoise)
        }
        else {console.log('Вы не выиграли компьютер загадал:'+ compChoise)}
        } 
}
