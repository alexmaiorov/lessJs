// let users = {
//     data: [
//         {name: 'ELena'},
//         {name: 'Vasiliy'}
//     ],
//     showFirst: function (event) {
//         console.log(this)
//         console.log(this.data[0].name);
//     }
// }
// console.dir(users.showFirst)
// document.querySelector('.btn').addEventListener('click', users.showFirst.bind(users));
// function rate(){
//     this.rating += +prompt('Дайте оценку книге (1-5)')
// }

// let book1 = {
//     title: 'Джанга с тенями',
//     rating: null,
//     rate: function() {
//         rate.call(this)
//     }
// },
// book2 = {
//     title: 'Страж империи',
//     rating: null,
//     rate: function() {
//         rate.call(this)
//     }
// }

// var avgScore = "global avgScore";
// function avg(arrayOfScores) {
//     var sumOfScores = arrayOfScores.reduce(function(prev, cur, index, array) {
//          return prev + cur;
//     });
//     this.avgScore = sumOfScores / arrayOfScores.length;
// }
// var gameController = {
//     scores  :[20, 34, 55, 46, 77],
//     avgScore:null
// }
// avg(gameController.scores);
// console.log(window.avgScore);             // 46.4
// console.log(gameController.avgScore);     // null
// avgScore = "global avgScore";
// avg.call(gameController, gameController.scores);
// console.log(window.avgScore);             //global avgScore
// console.log(gameController.avgScore);     // 46.4

// var clientData = {
//     id: 094545,
//     fullName: "Not Set",
//     setUserName: function(firstName, lastName)  {   
//         this.fullName = firstName + " " + lastName;
//     }
// }
// function getUserInput(firstName, lastName, callback, callbackObj) {
//     callback.apply(callbackObj, [firstName, lastName]);
// }


// let vasya = {
//     name: 'Vasiliy',
//     getName: function () {
//         console.log(this),
//         console.log(this.name)
//     }
// }

// let lena = {
//     name: 'Elena',
//     getName: () => {
//         console.log(this),
//         console.log(this.name)
//     }
// }

function mul(a) {
    return (b) => {
        return a*b
    }
}

let mul5 = mul(5);
let mul10 = mul(10);