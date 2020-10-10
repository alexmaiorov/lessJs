function chess(){
    let desk = document.querySelector('.desk')
    let block
    let flag = true
    for(let i = 0; i<8; i++){
        console.log(i)
        for(let j = 0; j<8; j++){
            if (j==0) {flag=!flag}
            block = document.createElement('div')
            if (flag){block.className = 'block black'}
            else {block.className = 'block white'}
            desk.appendChild(block)
            flag=!flag
        }
    }
}
chess()