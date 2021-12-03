a = [2,3,5,78]
var max = a.reduce(function(a, b) {
    return Math.max(a, b);
  });
console.log(max)
console.log(a.indexOf(max))