//if else statements
// ======陳述式(statements)=====
// 陳述式會執行一個動作
//if else ，如果 x ，就做y

//==== if語法======================================================= ========
//小括號裡通常是個表達式，可能是個布林值
//大括號什麼程式碼都可以
// if(布林值){
//     statements
//     ...
// }

// const condition = false; //沒成立不會進去，只會印出下面的程式結束

// if (condition) {
//   console.log("條件成立");
// }

// console.log("程式結束");

// //===============================================================

// const condition1 = true; //成立，進入迴圈印出條件成立，結束印出下面程式結束

// if (condition1) {
//   console.log("條件成立");
// }

// console.log("程式結束");

//==== if else應用 ==============================================
//====if else 可以多次串聯，下方示範
//==== BMI ==================================================
const 體重 = 30;
const 身高 = 160;
const BMI = 體重 / (身高 / 100) ** 2; //身高公分換成公尺

console.log("BMI:", BMI);
if (BMI < 18.5) {
  //BMI<18.5 是個表達式，最後的值是false(表達式就是個值)
  console.log("過輕");
} else if (BMI >= 24) {
  console.log("過重");
} else {
  console.log("正常");
}

//====if else 語法==================================================
//if(布林值){//條件成立才會執行
//   statements
//   ...

// }else{ //條件不成立才會執行
//   statements
//   ...
// }

//====if else if 語法================================================
//if(布林值1){//條件成立才會執行
//   statements
//   ...

// }else if(布林值2){ //第一個條件不符合，第二個條件符合才會執行
//   statements
//   ...
// }

//====if else if else 語法    兩個條件都不符合的時候執行==================
//if(布林值1){//條件成立才會執行
//   statements
//   ...

// }else if(布林值2){ //第一個條件不符合，第二個條件符合才會執行
//   statements
//   ...
// }else{
//   statements
//   ...
// }

//====if else 可以多次串聯，下方示範
const n = 6;
if (n < 1) {
  console.log("n<1");
} else if (n < 2) {
  //n=1時，不是<1，所以是這個條件
  console.log("n<2");
} else if (n < 3) {
  ///n=2時，不是<2，所以是這個條件
  console.log("n<3");
} else {
  console.log("n>=3");
}
