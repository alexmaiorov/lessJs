//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'

const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
const IDS = [1, 2, 3, 4, 5, 6, 7, 8]
let list = createDTO () //зодание товаров функцией

class Product {
    constructor(product) {
        this.name = product.name
        this.id = product.id
        this.img = product.img
        this.price = product.price
    }
    render() {
        return `
            <div class="product-item">
                <img src="${this.img}" alt="img">
                <div class="desc">
                    <h3>${this.name}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
                </div>
            </div>
        `
    }
}

class Products {
    constructor(block) {
        this.products = []
        this.block = `.${block}`
        this._init()
    }
    _init() {
        list.forEach(element => {
            this.products.push(new Product(element))
        });
        this.render()
    }
    render() {
        let block = document.querySelector(this.block)
        let strHtml = ''
        this.products.forEach(element => {
            strHtml += element.render()
        });
        block.innerHTML = strHtml
    }
}

class CartItem{
    constructor(prod) {
        // console.log(prod.name)
        this.name = prod.name
        this.price = +prod.price
        this.id = +prod.id
        this.quantity = +prod.quantity
        
    }
    _renderCart() {
        return `
            <div class="cart-item">
                <div class="product-bio">
                    <img src="${cartImage}" alt="cart-img">
                    <div class="product-desc">
                        <p class="product-title">${this.name}</p>
                        <p class="product-quantity">${this.quantity}</p>
                        <p class="product-single-price">${this.price}</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${this.quantity * this.price}</p>
                    <button class="del-btn" data-id ="${this.id}">&times;</button>
                </div>
            </div>
            `
    } 
}
class Cart{
    constructor() {
        this.products=[]
        this._init()
    }
    _init() {
        userCart.forEach(element => {
            console.log(element)
            this.products.push(new CartItem(element))
        });
        this.render()
    }
    render (){
        let strHtml = ''
        this.products.forEach(element => {
            strHtml += element._renderCart()
        })
        document.querySelector('.cart-block').innerHTML = strHtml
    }  
}

   

function addProduct(prod) {
    let find = userCart.find (el => {
                return el.id === +prod.dataset['id']
            })
            if (find) {
                find.quantity++
            } else {
                userCart.push({
                    name: prod.dataset['name'],
                    price: +prod.dataset['price'],
                    id: +prod.dataset['id'],
                    quantity: 1
                })  
            }
        new Cart()
    }
function removeProduct(prod) {
        let find = userCart.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find.quantity > 1) {
            find.quantity--
        } else {
            userCart.splice (userCart.indexOf(find), 1)
        }
        new Cart()
    }

function createDTO () {
    let arr = []
    
    for (let i = 0; i < ITEMS.length; i++) {
        arr.push (createProduct (ITEMS[i], PRICES[i], IDS[i]))
    }
    return arr
}

let btnCart = document.querySelector('.btn-cart')
btnCart.addEventListener('click', showCart)

function showCart() {
    document.querySelector('.cart-block').classList.toggle('invisible')
}

document.querySelector('.products').addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn')) {
            addProduct (e.target)
        }
    })
document.querySelector('.cart-block').addEventListener('click', function(e) {
        if (e.target.classList.contains('del-btn')) {
            removeProduct (e.target)
        }
    })
// function addProduct(prod) {
//     let find = userCart.find (el => {
//         return el.id === +prod.dataset['id']
//     })
//     if (find) {
//         find.quantity++
//     } else {
//         userCart.push ({
//             name: prod.dataset['name'],
//             price: +prod.dataset['price'],
//             id: +prod.dataset['id'],
//             quantity: 1
//         })
//     }
//     renderCart()
// }

// 

// function renderCart() {
//     let htmlStr = ''
//     userCart.forEach(el => {
//         htmlStr += `
//         <div class="cart-item">
//             <div class="product-bio">
//                 <img src="${cartImage}" alt="cart-img">
//                 <div class="product-desc">
//                     <p class="product-title">${el.name}</p>
//                     <p class="product-quantity">${el.quantity}</p>
//                     <p class="product-single-price">${el.price}</p>
//                 </div>
//             </div>
//             <div class="right-block">
//                 <p class="product-price">${el.quantity * el.price}</p>
//                 <button class="del-btn" data-id ="${el.id}">&times;</button>
//             </div>
//         </div>
//         `
//     })
//     document.querySelector('.cart-block').innerHTML = htmlStr
// }

function createProduct (name, price, id) {
    return {
        name: name,
        id: id,
        price: price,
        img: image,
        // createTemplate: function() {
        //     return `
        //         <div class="product-item">
        //             <img src="${this.img}" alt="img">
        //             <div class="desc">
        //                 <h3>${this.name}</h3>
        //                 <p>${this.price}</p>
        //                 <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
        //             </div>
        //         </div>
        //     `
        // }
    }
}

// function renderCatalog() {
//     let htmlStr = ''
//     productsDTO.forEach(el => {
//         htmlStr += el.createTemplate ()
//     })
//     document.querySelector('.products').innerHTML = htmlStr
// }

// // createDTO()
// // renderCatalog()

// document.querySelector('.products').addEventListener('click', function(e) {
//     if (e.target.classList.contains('buy-btn')) {
//         addProduct (e.target)
//     }
// })

// document.querySelector('.cart-block').addEventListener('click', function(e) {
//     if (e.target.classList.contains('del-btn')) {
//         removeProduct (e.target)
//     }
// })


// //Псевдо ООП
// let store = {
//     catalog: [],
//     cart: [],
//     createDTO: function() {
//         for (let i = 0; i < ITEMS.length; i++) {
//             this.catalog.push (this._createProduct (ITEMS[i], PRICES[i], IDS[i]))
//         }
//     },
//     _createProduct: function(name, price, id) {
//         return {
//             name: name,
//             id: id,
//             price: price,
//             img: image,
//             createTemplate: function() {
//                 return `
//                     <div class="product-item">
//                         <img src="${this.img}" alt="img">
//                         <div class="desc">
//                             <h3>${this.name}</h3>
//                             <p>${this.price}</p>
//                             <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
//                         </div>
//                     </div>
//                 `
//             }
//         }
//     },
//     renderCatalog: function() {
//         let htmlStr = ''
//         this.catalog.forEach(el => {
//             htmlStr += el.createTemplate ()
//         })
//         document.querySelector('.products').innerHTML = htmlStr
//     }
// }

