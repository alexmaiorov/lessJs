//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const FAKEAPI = 'https://raw.githubusercontent.com/alexmaiorov/for_json/master'
class List{
    //суперкласс для каталога и корзины
    constructor (url, container) {
        this.container = container
        this.url = url
        this.items = []
        this.DTOarr = [] //массив для получения данных
        this._init()
    }
    _init(){
        return false
    }
    getJSON(url){
        return fetch(url)
            .then(d => d.json())
    }
    render() {
        const block = document.querySelector(this.container)
        this.DTOarr.forEach(el => {
            let item = new LISTS[this.constructor.name](el)
            this.items.push(item)
            block.insertAdjacentHTML ('beforeend', item.render())
        })
    }
}

class ListItem{
    constructor(el, img = image) {
        this.title = el.title
        this.price = el.price
        this.id = el.id
        this.img = img
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                            data-id="${this.id}"
                            data-title="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить
                        </button>
                    </div>
                </div>`
    }
}

class ProductsList extends List{
    constructor(cart, url ='/catalogData.json', container = '.products'){
        super(url, container)
        this.cart = cart
    }
    _init(){
        this.getJSON(FAKEAPI + this.url)
            .then(data => {this.DTOarr = data})
            .finally(() => {
                this.render()
            })
    }
}

class ProductItem extends ListItem{

}

class CartList extends List{
    constructor(url ='/cartData.json', container = '.cart'){
        super(url, container)
    }
    _init(){
        this.getJSON(FAKEAPI + this.url)
            .then(data => {this.DTOarr = data.contents})
            .finally(() => {
                this.render()
            })
    }
}

class CartItem extends ListItem{
    constructor (el, img = cartImage) {
        super (el, img)
        this.quantity = el.quantity
    }
    render() {
        return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.title}</p>
                            <p class="product-quantity">Quantity: ${this.quantity}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.price}</p>
                        <button class="del-btn" data-id="${this.id}">&times;</button>
                    </div>
                </div>`
    }
}

const LISTS = {
    ProductsList: ProductItem,
    CartList: CartItem
}

let cart = new CartList()
let products = new ProductsList(cart)

// class Product {
//     constructor (product) {
//         id: product.id
//         title: product.title
//         price: product.price
//         img: product.img
//     }
//     render() {
//         return `<div class="product-item" data-id="${this.id}">
//                     <img src="${this.img}" alt="Some img">
//                     <div class="desc">
//                         <h3>${this.title}</h3>
//                         <p>${this.price} $</p>
//                         <button class="buy-btn" 
//                             data-id="${this.id}"
//                             data-name="${this.title}"
//                             data-image="${this.img}"
//                             data-price="${this.price}">Купить
//                         </button>
//                     </div>
//                 </div>`
//     }
// }

// class Products {
//     constructor(block) {
//         this.products = []
//         this.block = `.${block}`
//         this._init()
//     }
//     _init(){
//         list.forEach (item => {
//             this.products.push(new Product (item))
//         })
//         this.render()
//     }
//     render(){
//         let block = document.querySelector(this.block)
//         let str = ''
//         this.products.forEach (item => {
//             str += item.render ()
//         })
//         block.innerHTML = str
//     }
// }


// //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
// var userCart = [];
// var list = fetchData ();

// let catalog = new Products ('products')
//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});
//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        removeProduct (evt.target);
    }
})
//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('buy-btn')) {
        addProduct (evt.target);
    }
})

// //создание массива объектов - имитация загрузки данных с сервера
// function fetchData () {
//     let arr = [];
//     for (let i = 0; i < items.length; i++) {
//         arr.push (createProduct (i));
//     }
//     return arr
// };

// //создание товара
// function createProduct (i) {
//     return {
//         id: ids[i],
//         title: items[i],
//         price: prices[i],
//         img: image,
//     }
// };

// //рендер списка товаров (каталога)
// // function renderProducts () {
// //     let arr = [];
// //     for (item of list) {
// //         arr.push(item.createTemplate())
// //     }
// //     document.querySelector('.products').innerHTML = arr.join();
// // }

// // renderProducts ();

// //CART

// // Добавление продуктов в корзину
// function addProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (!find) {
//         userCart.push ({
//             name: product.dataset ['name'],
//             id: productId,
//             img: cartImage,
//             price: +product.dataset['price'],
//             quantity: 1
//         })
//     }  else {
//         find.quantity++
//     }
//     renderCart ()
// }

// //удаление товаров
// function removeProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (find.quantity > 1) {
//         find.quantity--;
//     } else {
//         userCart.splice(userCart.indexOf(find), 1);
//         document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//     }
//     renderCart ();
// }

// //перерендер корзины
// function renderCart () {
//     let allProducts = '';
//     for (el of userCart) {
//         allProducts += `<div class="cart-item" data-id="${el.id}">
//                             <div class="product-bio">
//                                 <img src="${el.img}" alt="Some image">
//                                 <div class="product-desc">
//                                     <p class="product-title">${el.name}</p>
//                                     <p class="product-quantity">Quantity: ${el.quantity}</p>
//                                     <p class="product-single-price">$${el.price} each</p>
//                                 </div>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${el.quantity * el.price}</p>
//                                 <button class="del-btn" data-id="${el.id}">&times;</button>
//                             </div>
//                         </div>`
//     }

//     document.querySelector(`.cart-block`).innerHTML = allProducts;
// }