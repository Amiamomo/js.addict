

var $ = require('jquery')((require("jsdom").jsdom().defaultView))

var obj1 = { section1 : "Warry" }
var obj2 = { drum : "Boom" }
var res = $.extend(true,obj1,obj2)
console.log(res);
 
const {a, b} = { a: 'z', b: 'e' }
console.log(a); 
console.log(b);    

// $("<h1>test passes</h1>").appendTo("body");
// console.log($("body").html());

// $.getJSON('http://twitter.com/status/user_timeline/treason.json?count=10&callback=?',function(data) {
//   console.log(data);
// });  