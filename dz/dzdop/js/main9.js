let min = 1000,
    max = 9999
function getRandomInRange(mi, ma) {
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
  }

var rnd = getRandomInRange(min, max)
console.log(rnd)

function game (compNum){
    userNum = +prompt('Я загадал число от 1000 до 9999 отгадай его:')
    console.log(userNum)
    if (userNum!==compNum) { 
        let bull=0
        let cow = 0
        let userArr = String(userNum).split('')
        let compArr = String(compNum).split('')
        for (let i = 0; i < 4; i++){
            if (userArr[i]==compArr[i]){
                bull++
            }else if (compArr.indexOf(userArr[i]) > -1){
                cow++
            }
        }
        console.log(bull + '/' + cow) 
        return game(compNum)
    } else{console.log('Ты угадал')}     
}
game(rnd) 
