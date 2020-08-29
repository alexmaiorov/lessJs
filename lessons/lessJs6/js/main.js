// class Human {
//     constructor(name, gender){
//         this.name = name
//         this.gender = this._returnGender(gender)
//         this.Married = false
//         this.Partner = null
//     }
//     _returnGender(g) {
//         return g ? 'male' : 'female'
//     }
//     greet() {
//         this.name ? console.log(`Hi! I'm ${this.name}`) : console.log('I do not know, who am i');
//     }
//     getMarried (pers) {
//         this.Married = true
//         this.Partner = pers.name
//     }
// }

// let olya = new Human('Olga', 0)
// let vasya = new Human('Vasiliy', 1)
// let kolya = new Human

let uForm = document.querySelector("#userform")
let btn = document.querySelector("#ok")
let users = []

class User {
    constructor(name, age, gender, hobbies) {
        this.name = this._input(name)
        this.age = this._input(age)
        this.gender = this._check(gender)
        this.hobbies = this._getHobbies(hobbies)
    }
    _input(attrName) {
        let object = document.querySelector(`input[name=${attrName}]`)
        return object.value
    }
    _check(attrName) {
        let object = document.querySelector(`input[name=${attrName}]:checked`)
        return object.value
    }
    _getHobbies(attrName) {
        let hob = []
        let arr = [...document.querySelectorAll(`input[name=${attrName}]:checked`)]
        arr.forEach(el => hob.push(el.value))
        return hob
    }
}

function addUser(){
    let newUser = new User ('Name', 'Age', 'Gender', 'Hobbie')
    users.push(newUser)
}

btn.addEventListener('click', addUser)