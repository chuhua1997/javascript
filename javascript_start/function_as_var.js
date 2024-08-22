function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}
//function as variable
console.log(sum); //[Function: sum]
console.log(sum(2, 3)); //5
//function as parameter
//
function printResult(x, y, fn) {
  //console.log結果就是，呼叫一個function(fn代稱)，然後把x、y傳進去的結果
  console.log(`Result:${fn(x, y)}`);
}
printResult(10, 25, sum); //Result:35
printResult(10, 25, mult); //Result:250
