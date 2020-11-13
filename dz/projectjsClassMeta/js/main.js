//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'

const FAKEAPI = 'https://raw.githubusercontent.com/alexmaiorov/for_json/master'

class List {
    //суперкласс для каталога и корзины
    constructor (url, block) {
        this.block = block
        this.url = url
        // общие
        this.items = [] //active objects
        this.DTOarr = [] //uploaded objects
        this._init()
    }
    _init() {
        return false
    }
    getJson(url) {
        return fetch(url)
                .then (d => d.json())
    }
    render() {
        let block = document.querySelector(this.block)
        this.DTOarr.forEach(e => {
            let item = new lists[this.constructor.name] (e)
            this.items.push(item)
            block.insertAdjacentHTML('beforeend', item.render())
        })
    }
}

class ListItem {
    //суперкласс для продукта в каталоге и корзине
    constructor (e, img) {
        this.title = e.title
        this.price = e.price
        this.id = e.id
        this.img = img
    }
    render () {
        return false
    }
}

class ProductList extends List {
    constructor (cart, url = '/catalogData.json', block = '.products') {
        super(url, block)
        this.cart = cart
    }
    _init() {
        this.getJson(FAKEAPI + this.url)
            .then(data => {this.DTOarr = data})
            .finally(() => {
                this.render()
            })
    }
}

class CartList extends List {
    constructor (url = '/cartData.json' , block = '.cart-block') {
        super(url, block)
    }
    _init() {
        this.getJson(FAKEAPI + this.url)
            .then (data => {this.DTOarr = data.contents})
            .finally(() => {
                this.render()
            })
    }
}

class ProductItem extends ListItem{
    constructor(e,img,quantity){
        super(e, img)
    }
    render(){
         return `
                    <div class="product-item">
                        <img src="${this.img}" alt="img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price}</p>
                            <button class="buy-btn" data-id ="${this.id}" data-name="${this.title}" data-price="${this.price}">Купить</button>
                        </div>
                    </div>
                `
    }
}

class CartItem extends ListItem{
    constructor(e,img,quantity){
        super(e, img)
        this.quantity=quantity
    }
  render(){
      return`
              <div class="cart-item">
                  <div class="product-bio">
                      <img src="${cartImage}" alt="cart-img">
                      <div class="product-desc">
                          <p class="product-title">${this.title}</p>
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


const lists =  {
    ProductList: ProductItem,
    CartList: CartItem
}

let cart = new CartList()
let products = new ProductList (cart)
//=======================================================================
// class Product {
//     constructor(product) {
//         this.name = product.name
//         this.id = product.id
//         this.img = product.img
//         this.price = product.price
//     }
//     render() {
//         return `
//             <div class="product-item">
//                 <img src="${this.img}" alt="img">
//                 <div class="desc">
//                     <h3>${this.name}</h3>
//                     <p>${this.price}</p>
//                     <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
//                 </div>
//             </div>
//         `
//     }
// }

// class Products {
//     constructor(block) {
//         this.products = []
//         this.block = `.${block}`
//         this._init()
//     }
//     _init() {
//         list.forEach(element => {
//             this.products.push(new Product(element))
//         });
//         this.render()
//     }
//     render() {
//         let block = document.querySelector(this.block)
//         let strHtml = ''
//         this.products.forEach(element => {
//             strHtml += element.render()
//         });
//         block.innerHTML = strHtml
//     }
// }

// let catalog = new Products('products')



// class CartItem{

// }

// class Cart{
    
// }

// let userCart = []

// function createDTO () {
//     let arr = []
    
//     for (let i = 0; i < ITEMS.length; i++) {
//         arr.push (createProduct (ITEMS[i], PRICES[i], IDS[i]))
//     }
//     return arr
// }

let btnCart = document.querySelector('.btn-cart')
btnCart.addEventListener('click', showCart)

function showCart() {
    document.querySelector('.cart-block').classList.toggle('invisible')
}

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
//         // createTemplate: function() {
//         //     return `
//         //         <div class="product-item">
//         //             <img src="${this.img}" alt="img">
//         //             <div class="desc">
//         //                 <h3>${this.name}</h3>
//         //                 <p>${this.price}</p>
//         //                 <button class="buy-btn" data-id ="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
//         //             </div>
//         //         </div>
//         //     `
//         // }
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
