let carousel = document.querySelector('.carousel');

function getGal () {
    let str = '<img class="carousel-img active" src="img/1.jpg" alt="img" height="80" onclick = "SetMain(this)">'
    for (let i = 2; i<=8; i++){
        str += `<img class="carousel-img" src="img/${i}.jpg" alt="img" height="80" onclick = "SetMain(this)">`
    }
    carousel.innerHTML = str
}

getGal()

function GoLeft(){
    let arr = [...document.querySelectorAll('.carousel-img')]
    let active = document.querySelector('.active')
    num = arr.indexOf(active)
    active.classList.remove('active');
    if (num === 0) {
        document.querySelector('.main').src = arr[arr.length-1].src
        arr[arr.length-1].classList.add('active')
    } else {
        document.querySelector('.main').src = arr[num-1].src
        arr[num-1].classList.add('active')
    }
}

function SetMain (img){
    document.querySelector('.main').src = img.src
}