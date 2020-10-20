//1) 0/1
//2) HTML XML
//3) String JSON

// let obj = {
//   a: 'something',
//   b: 100,
//   c: null,
//   d: true,
//   e: undefined
// }

// let objJson = JSON.stringify(obj)
// console.log(objJson);

let url_users = "https://jsonplaceholder.typicode.com/users"

//AJAX
//1) call back functions
//2) Промисы promise
//3) fetch
//4) async ... await
//====================================================================================================
//CALL BACK FUNCTIONS
//getDTO()
//..
//..
//Profit
// let transferedData
// function getDTO(cb) {
//   setTimeout(() => {
//     transferedData = '{"a":100}'
//     cb()
//   }, 0)
// }

// getDTO(() => {
//   console.log(transferedData);
// })


// function makeGETRequest(url, callback) {
//   var xhr;

//   if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
//   } else if (window.ActiveXObject) { 
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         callback(xhr.responseText);
//       }
//     }
//   }

//   xhr.open('GET', url, true);
//   xhr.send();
// }

// let users
// function parseData(jsonObj) {
//   users = JSON.parse(jsonObj)
//   console.log(users);
// }


// makeGETRequest(url_users, parseData)
//====================================================================================
//PROMISE

// function promiseReq(a){
//   return new Promise ((res, rej) => {
//     if(a) {
//       console.log('ok');
//       res('we got' + a)
//     } else {
//       console.log('not ok');
//       rej('some error')
//     }
//   })
// }

// promiseReq()
//   .then( resolveData => {
//     console.log(resolveData);
//   })
//   .catch( rejectData => {
//     console.log(rejectData);
//   })
//   .finally( () => {
//     console.log('promise ended');
//   })

// function makeGETRequestPromise(url) {
//   return new Promise ((res, rej) => {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('ok');
//           res(xhr.responseText)
//         } else {
//           console.log('not ok');
//           rej('server error')
//         }
//       }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
//   })
// }

// makeGETRequestPromise(url_users)
//   .then(dataJson => JSON.parse(dataJson))
//   .then(dataNotJson => {
//     console.log(dataNotJson);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//=================================================================================
//FETCH

// let users
// fetch(url_users)
//   .then(d => d.json())
//   .then(data => {users = data})
//   .finally(() => console.log(users))
//=================================================================================
//async .. await

async function makeAsyncReq(url) {
  let us
  try {
    us = await fetch(url).then(d => d.json())
  }
  catch(e) {
    //
  }
  finally {
    if (us) console.log(us);
  }
}

makeAsyncReq(url_users)