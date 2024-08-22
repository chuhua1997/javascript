// forEach()使用時機
//forEach(call back function)
//從頭到尾把陣列中的每一個元素都印出來
//參考網頁:https://n4563810.medium.com/%E7%AD%86%E8%A8%98-%E9%99%A3%E5%88%97%E8%BF%AD%E4%BB%A3%E5%99%A8foreach-%E7%AE%AD%E9%A0%AD%E5%87%BD%E5%BC%8F-d62f6275ff0f

//==== 參數 =============================================
// 函式的參數確實是在函式定義中直接使用的，而不需要事先宣告。

// forEach 的必要參數是一個函式
// forEach() 的功能是把陣列的每個元素都丟進某個函式執行一次，因此必要的參數是一個函式。

// const words = ["I", "am", "AC", "Genie"];
// words.forEach(function print(word) {
//   console.log(word);
// });
//一個個 印出來
// I
// am
// AC
// Genie

//===== 把函式當成值 ====================================
// 先在 forEach 之外定義一個函式
// 再把函式當成值作為 forEach 的參數，也可以
// print 這個變數先儲存一個函式，print 的值是一個函式
// 用forEach 就直接
// const print = function (word) {
//   console.log(word);
// };
// words.forEach(print);
//印出與上排一樣的答案
//I
// am
// AC
// Genie

// forEach 迭代器會把三個參數丟進 function 內，分別是：

// currentValue (當前陣列元素的值)
// index (當前陣列元素的 index(索引))
// array (當前陣列本身)
// 若想對陣列裡所有的數做加總
// 並且想明確知道現在 forEach 處理到哪一個項目了，可以這麼做：

const scores = [1, 2, 3];
let sum = 0; //宣告加總，初始值給零
//(score,index) 是參數，不須宣告
// scores.forEach(function (score, index) {
//   console.log(`現在輪到第${index}項,值是${score}`);
//   sum += score; //sum=sum+score 加總的值
//   console.log(`現在總和是${sum}`);
// });

// forEach 沒有回傳值，當陣列交給 function 處理後任務就結束了
// function 的參數可以自由命名，但不論取什麼名字，都只會在這個函式有效
// function 可以匿名，由於個函式只會在 forEach 裡運作
// 別的地方用不到，因此沒有特別取名的必要，更多時候會使用箭頭函式：

//==== 箭頭函式 ==================================================
// 只有「匿名函式」才能改寫成箭頭函式
// 箭頭函式只是比較簡潔的寫法，觀念和一般函式相同

scores.forEach((score, index) => {
  console.log(`現在輸到第 ${index} 項，值是 ${score}`);
  sum += score;
  console.log(`現在總和是： ${sum}`);
});

//=========只有「匿名函式」才能改寫成箭頭函式 ==================================

//原式
// const triangleArea =function(width,height){
//     return(width*height)/2
// }

//寫成箭頭函式
// const triangleArea =(width,height)=>{
//     return(width*height)/2
// }

// 如果參數只有一個，能省略括號：

// const triangleArea = (length) => {
//   return (width * height) / 2;
// };

// 如果回傳值只有一行程式碼，可以進一步省略大括號和 return：

// const triangleArea = (length) => (width * height) / 2;

// 如果沒有參數時，一定要有括號：

const triangleArea = () => "This is a triangle !";
