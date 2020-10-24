//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'

const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
const IDS = [1, 2, 3, 4, 5, 6, 7, 8]

// let productsDTO = createDTO () //зодание товаров функцией
// let userCart = []

// function createDTO () {
//     let arr = []
    
//     for (let i = 0; i < ITEMS.length; i++) {
//         arr.push (createProduct (ITEMS[i], PRICES[i], IDS[i]))
//     }
//     return arr
// }

// let btnCart = document.querySelector('.btn-cart')
// btnCart.addEventListener('click', showCart)

// function showCart() {
//     document.querySelector('.cart-block').classList.toggle('invisible')
// }

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

// function removeProduct(prod) {
//     let find = userCart.find (el => {
//         return el.id === +prod.dataset['id']
//     })
//     if (find.quantity > 1) {
//         find.quantity--
//     } else {
//         userCart.splice (userCart.indexOf(find), 1)
//     }
//     renderCart()
// }

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

// function createProduct (name, price, id) {
//     return {
//         name: name,
//         id: id,
//         price: price,
//         img: image,
//         createTemplate: function() {
//             return `
//                 <div class="product-item">
//                     <img src="${this.img}" alt="img">
//                     <div class="desc">
//                         <h3>${this.name}</h3>
//                         <p>${this.price}</p>
//                         <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
//                     </div>
//                 </div>
//             `
//         }
//     }
// }

// function renderCatalog() {
//     let htmlStr = ''
//     productsDTO.forEach(el => {
//         htmlStr += el.createTemplate ()
//     })
//     document.querySelector('.products').innerHTML = htmlStr
// }

// // createDTO()
// // renderCatalog()




//Псевдо ООП
let store = {
    catalog: [],
    cart: [],
    createDTO: function() {
        for (let i = 0; i < ITEMS.length; i++) {
            this.catalog.push (this._createProduct (ITEMS[i], PRICES[i], IDS[i]))
        }
    },
    _createProduct: function(name, price, id) {
        return {
            name: name,
            id: id,
            price: price,
            img: image,
            createTemplate: function() {
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
    },
    renderCatalog: function() {
        let htmlStr = ''
        this.catalog.forEach(el => {
            htmlStr += el.createTemplate ()
        })
        document.querySelector('.products').innerHTML = htmlStr
    },
    addProduct: function (prod) {
        let find = this.cart.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find) {
            find.quantity++
        } else {
            this.cart.push ({
                name: prod.dataset['name'],
                price: +prod.dataset['price'],
                id: +prod.dataset['id'],
                quantity: 1
            })
        }
        renderCart()
    },
    showCart: function() {
        document.querySelector('.cart-block').classList.toggle('invisible')
    },
    renderCart: function () {
        let htmlStr = ''
        this.cart.forEach(el => {
            htmlStr += `
            <div class="cart-item">
                <div class="product-bio">
                    <img src="${cartImage}" alt="cart-img">
                    <div class="product-desc">
                        <p class="product-title">${el.name}</p>
                        <p class="product-quantity">${el.quantity}</p>
                        <p class="product-single-price">${el.price}</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${el.quantity * el.price}</p>
                    <button class="del-btn" data-id ="${el.id}">&times;</button>
                </div>
            </div>
             `
        })
        document.querySelector('.cart-block').innerHTML = htmlStr
    },
    addProduct: function (prod) {
        let find = this.cart.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find) {
            find.quantity++
        } else {
            store.cart.push ({
                name: prod.dataset['name'],
                price: +prod.dataset['price'],
                id: +prod.dataset['id'],
                quantity: 1
            })
        }
        this.renderCart()
    },
    removeProduct: function(prod) {
        let find = this.cart.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find.quantity > 1) {
            find.quantity--
        } else {
            store.cart.splice (this.cart.indexOf(find), 1)
        }
        this.renderCart()
    }
}


store.createDTO()
store.renderCatalog()
document.querySelector('.btn-cart').addEventListener('click', store.showCart)
document.querySelector('.products').addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-btn')) {
        store.addProduct (e.target)
    }
})
document.querySelector('.cart-block').addEventListener('click', function(e) {
    if (e.target.classList.contains('del-btn')) {
        store.removeProduct (e.target)
    }
})

