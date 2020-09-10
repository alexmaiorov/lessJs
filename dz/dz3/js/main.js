let min = 1000,
    max = 9999
function getRandomInRange(mi, ma) {
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
  }

console.log(game(getRandomInRange(min, max)))

function game (b){
    a = prompt('Я загадал число от 1000 до 9999 отгадай его:')
    if (a>b) { 
        console.log('Слишком большое')
        return game(b)
    }
    else if (a<b) {
        console.log('Слишком маленькое') 
        return game(b)
    }
    else {
        console.log ('Поздравляю, Давай езё раз попытайся угадать число от 1000 до 9999')
        return game(getRandomInRange(1000,9999))
    }
    }
