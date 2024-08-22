function greeting() {
  console.log("hello");
}

// const greet2 = () => {
//   console.log("hello");
// };
//省略寫法，因為不在乎return值，大括號裡只有一行
const greet2 = () => console.log("hello");

//用function時不能省略，只有箭頭函式可以省略大括號
function sum(a, b) {
  return a + b;
}

// const sum2 = (2,3) => {
//   return a + b;
// };

//省略寫法，function裡只有一行，大括號可省，return也可省
// 省略大括號，箭號後面的就是return值(所以return可以不用寫)
const sum2 = (a, b) => a + b; //sum的函式簡寫放到sum2裡
