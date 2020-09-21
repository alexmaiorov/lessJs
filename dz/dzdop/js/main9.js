let min = 1000,
    max = 9999
function getRandomInRange(mi, ma) {
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
  }

console.log(game(getRandomInRange(min, max)))

function game (b){
    a = prompt('Я загадал число от 1000 до 9999 отгадай его:')
    if (a!==b) { 
        let bull=0
        let cow = 0
        let a1 = a.split('')
        let b1 = b.split('')
        a1.forEach(element => {if (a1(element)==b1(element)) {bull=+bull}
            })
        }
    }
