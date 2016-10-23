
var i = [1, 2, 3];
var sum = function(a) {
  var s;
  s = 0;
  for (i=0; i < a.length; i++)
    s = s + a[i];
  return s;
}

console.log(sum(i));

var add = function(a, b) {
   var c = [];
   for (i=0; i < a.length; i++)
     c.push(a[i]);

   for (i=0; i < b.length; i++)
     c.push(b[i]);
   return c;
}

console.log (add(["toyota", "honda"], ["prius", "civic"]));

var add1 = function(a, b) {
    var c = a.concat(b);
    return c;
}

Array.prototype.remove = function(a, b) {
   var i, removedItems = [];
   for (i = this.length; i--;) {
     if (this[i] === val) removedItems.push(this.splice(i,1))
   }
   return removedItems;
}

var uppercase = function(a) {
  var b = [];
  for (i = 0; i < a.length; i++) {
     var s = a[i];
     b.push(s.toUpperCase(s));
  }
}
