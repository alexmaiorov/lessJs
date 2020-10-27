// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Привет, Vue!',
//       list: ['first', 'second', 'third'],
//       users: [
//         {id:1, name: "vitya"},
//         {id:2, name: "dima"},
//         {id:3, name: "major"}
//       ],
//       flag: false,
//       isActive: true,
//       btnActive: true
//     },
//     created: function(){

//     },
//     methods: {
//         Function1(){
//             console.log('Function1');
//         },
//         Function2: function() {
//             console.log('Function2');
//         }
//     },
//     // computed: {

//     // },
//     // components: {

//     // },
//     // watch:{

//     // }

//   })

var app = new Vue({
    el: '#app',
    data: {
      requestedPost: null,
      limit: 10
    },
    methods: {
        getJson(url) {
            fetch(url)
                .then(d => d.json())
                .then(data => {this.requestedPost = data})
        },
        reload(){
            this.getJson('https://jsonplaceholder.typicode.com/posts?_limit=' + this.limit)
        }
    },
    mounted() {
        this.getJson('https://jsonplaceholder.typicode.com/posts?_limit=' + this.limit)
    }
  })