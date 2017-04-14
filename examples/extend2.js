var $ = require('jquery')((require("jsdom").jsdom().defaultView))

var obj1 = { section1 : "Warry" }
var obj2 = { drum : "Boom" }
var res = $.extend(true,obj1,obj2)
console.log(res);
 
console.log("Yeaaah");