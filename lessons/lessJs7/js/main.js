//AJAX
//1) цифровой 0/1
//2)HTML/text
//3)XML
//4)JSON - string

// let obj = {
//     a: 'something',
//     b: 100,
//     c: null,
//     d: undefined
// }
// objJSON = JSON.stringify(obj)
// console.log(JSON.parse(objJSON))
// console.log(JSON.parse(objJSON).d);

//GET
// POST
// PUT
// DELETE

//ASYNC
// 1) Функции обратного вызова
// 2) Промисы
// 3)fetch
// 4) async...await

// function getDTO () {
//     setTimeout(() => {
//         transferedData = '{"a":100}'
//     }, 0)
// }

// let transferedData

// //async
// //getDTO()
// //
// //
// //PROFIT
// getDTO()
// console.log(transferedData)

// function getDTOCB (cb) {
//     setTimeout(() => {
//         transferedData = '{"a":100}'
//         cb()
//     }, 0)
// }

// getDTOCB(() => {
//     console.log(transferedData)
// })

// function makeGETRequest(url, callback) {
//     let xhr = new XMLHttpRequest()
  
    // if (window.XMLHttpRequest) {
    //   xhr = new XMLHttpRequest();
    // } else if (window.ActiveXObject) { 
    //   xhr = new ActiveXObject("Microsoft.XMLHTTP");
    // }
  
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//           if(xhr.status === 200) {
//               callback(xhr.responseText)
//           }
//           else {
//               console.log('server error')
//           }
//         // callback(xhr.responseText);

//       }
//     }

//     xhr.open('GET', url, true)
//     xhr.send()
//   }

  let url_users = 'https://jsonplaceholder.typicode.com/users'

// function parceData(jsonObj) {
//     users = JSON.parse(jsonObj)
//     console.log(users)
// }
// makeGETRequest(url_users, parceData)


//================================================
//Promise

// function promiseReq(a) {
//     return new Promise ((res, rej) => {
//         if(a) {
//             console.log('ok')
//             res('we got ' + a)
//         } else {
//             console.log('not ok')
//             rej('some error tralala')
//         }
//     })
// }

// promiseReq(100)
//     .then( resolvedData => {
//         console.log(resolvedData)
//     })
//     .catch(rejectedData => {
//         console.log(rejectedData)
//     })
//     .finally(() => {
//         console.log('Promise ended');
//     })

// function makeGETRequestPromise(url){
//     return new Promise ((res, rej) => {
//         let xhr = new XMLHttpRequest()
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     console.log('ok')
//                     res(xhr.responseText)
//                 } else {
//                     rej('server error')
//                 }
//             }   
//         }
//         xhr.open('GET', url, true)
//         xhr.send()
//     })
// }

// makeGETRequestPromise (url_users)
//     .then (dataJSON => JSON.parse (dataJSON))
//     .then (dataNotJSON => {
//         console.log (dataNotJSON)
//     })
//     .catch (err => {
//         console.log (err)
//     })

//=============================================
//Fetch

// let users
// fetch (url_users)
//     .then(d => d.json())
//     .then(data => {users = data})
//     .finally(() => console.log(users))

// //===========================================
// async function makeAsyncReq(url) {
//     let us
//     try {
//         us = await fetch(url).then(d=>d.json())
//     }
//     catch(e){
//         //
//     }
//     finally {
//         if (us) console.log(us)
//     }
// }
// makeAsyncReq(url_users)