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
        this.name = e.title
        this.price = e.price
        this.id = e.id
        this.img = img
        // this.quantity = quantity
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
class CartList {
    constructor () {
        this.products=[]
    } 
    render (){
        let strHtml = ''
        this.products.forEach(el => {
            strHtml += el.render()
            console.log(strHtml)
        })
        document.querySelector('.cart-block').innerHTML = strHtml
    } 
    addProduct(prod) {
        console.log(prod.dataset['name'])
        // this.products=[]
        let find = this.products.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find) {
            find.quantity++
                } else {
                    let newProd={
                        name:prod.dataset['name'],
                        price: +prod.dataset['price'],
                        id: +prod.dataset['id'],
                        quantity: 1
                    }       
                this.products.push(new CartItem(newProd,cartImage)) 
                }
                this.render()
        } 
    removeProduct(prod) {
            let find = this.products.find (el => {
            return el.id === +prod.dataset['id']
        })
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.products.splice (this.products.indexOf(find), 1)
        }
        this.render()
    }   
}

class ProductItem extends ListItem{
    constructor(e,img){
        super(e, img)
    }
    render(){
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

class CartItem {
    constructor(e,img){
        this.name = e.name
        this.price = e.price
        this.id = e.id
        this.img = img
        this.quantity = e.quantity
    }
  render(){
      return`
              <div class="cart-item">
                  <div class="product-bio">
                      <img src="${cartImage}" alt="cart-img">
                      <div class="product-desc">
                          <p class="product-name">${this.name}</p>
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

let Cart = new CartList()
let Products = new ProductList (Cart)



let btnCart = document.querySelector('.btn-cart')
btnCart.addEventListener('click', showCart)

function showCart() {
    document.querySelector('.cart-block').classList.toggle('invisible')
}


document.querySelector('.products').addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-btn')) {
        let prod1 = e.target
        console.log(prod1)
        Cart.addProduct (prod1)
    }
})
document.querySelector('.cart-block').addEventListener('click', function(e) {
    if (e.target.classList.contains('del-btn')) {
        let prod2 = e.target
        Cart.removeProduct (prod2)
    }
})
name
