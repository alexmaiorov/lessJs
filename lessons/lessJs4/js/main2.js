// let btn = document.querySelector('.rnd-btn')

// btn.onclick = function () {
//     console.dir(btn)
// }

// btn.onclick = function () {
//     console.log('press')
// }

container = document.querySelector('.container')
container.addEventListener ('click', click)

function click (e) {
    if (e.target.dataset['number']) {
        console.log(e.target.dataset['number'])
    } else {
        console.log('press btn, please')
    }
}