//DOM

// console.log(document)
// console.dir(document)

// function lalala() {
//     let title = document.getElementById('title')
//     title.innerHTML = "<u>text from js</u>"
// }

// let liByGetEl = [...document.getElementsByClassName('my-list')]
// let liByQueryS = [...document.querySelectorAll('li')]

let targetOl = document.querySelector('#new');

// for (let i = 0; i < 5; i++) {
//     let newEl = document.createElement('li');
//     newEl.innerHTML = 'Some' + i
//     targetOl.appendChild(newEl)
// }

let strHTML =''
for (let i = 0; i < 5; i++) {
    strHTML += `<li>some text ${i}</li>`
}
targetOl.innerHTML = strHTML