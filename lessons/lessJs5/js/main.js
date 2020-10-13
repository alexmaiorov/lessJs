// let btn = document.querySelector('.btn')

// btn.onclick = function() {
//     console.dir(btn)
// }
// btn.onmouseenter = function() {
//     console.log('навел мышку')
// }
// btn.onmouseenter = function() {
//     alert('lalala')
// }

// btn.addEventListener('click', () => {
//     console.dir(btn)
// })
// btn.addEventListener('click', clickHandler)

// function clickHandler() {
//     console.log('click')
// }

// let btnArr = [...document.querySelectorAll('.btn')]

// btnArr.forEach(element => {
//     element.addEventListener('click', () => {
//         console.log(+element.dataset['number']);
//     })
// });

document.addEventListener('click', clickHandler)

function clickHandler(e) {
    if (e.target.classList.contains ('btn')){
        console.log(+e.target.dataset['number']);
    }
}
