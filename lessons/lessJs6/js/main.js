// let num = '1234 2205 5560 3789'
// let arr = [...num]


// let [a,b,c,d, ...rest] = arr

// let obj = {sv1:'100', sv2: '200'}
// let {sv1, sv2} = obj
// function rate(){
//     this.rating += +prompt('Dayte ocenku knige')
// }

// let book1 = {
//     title: 'Atlant',
//     rating: null,
//     rate: function () {
//         rate.call(this)
//     }
// }

// let book2 = {
//     title: 'generation pi',
//     rating: null,
//     rate: function () {
//         rate.call(this)
//     }
// }

// class Human {
//     constructor (name, gender) {
//         this.Name = name
//         this.Gender = this._returnGender(gender)
//         this.Married = false
//         this.Partner = null
//     }
//     _returnGender(g) {
//         return g ? 'male' : 'female'
//     }
//     getMarried (pers) {
//         if (!this.Married) {
//             this.Married = true
//             this.Partner = pers.Name
//             pers.getMarried(this)
//         } else {
//             console.log(`${this.Name} already married with ${this.Partner}`);
//         }
//     }
// }

// let olga = new Human ('Olga', 0)
// let vasiliy = new Human ('Vasya', 1)

// let saha = {
//     name: 'sasha'
// }

let uForm = document.querySelector('#userform')
let btn = document.querySelector('#ok')
let users = []

function addUser() {
    let newUser = new User ('Name', 'Age', 'Gender', 'Hobbie')
    users.push(newUser)
}

class User {
    constructor (name, age, gender, hobbies) {
        this.Name = this._input(name)
        this.Age = this._input(age)
        this.Gender = this._checked(gender)
        this.Hobbies = this._getHobbies(hobbies)
    }
    _input(attrName) {
        let obj = document.querySelector(`input[name=${attrName}]`)
        return obj.value
    }
    _checked(attrName) {
        let obj = document.querySelector(`input[name=${attrName}]:checked`)
        return obj.value
    }
    _getHobbies(attrName) {
        let hobs = []
        let arrObj = [...document.querySelectorAll(`input[name=${attrName}]:checked`)]
        arrObj.forEach(element => hobs.push(element.value));
        return hobs
    }
}

btn.addEventListener('click', addUser)