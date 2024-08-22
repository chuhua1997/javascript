//====釐清if vs. else if==================================
//使用 if else if 和都使用 if 的 差異
//如果 number = 6;，已經進去第一行只會印出2的倍數，不會往下
//但它同時也是3的倍數，就可以都用if的寫法去寫了

const number = 6;

// if (number % 2 === 0) {
//   console.log("2的倍數");
// } else if (number % 3 === 0) {
//   console.log("3的倍數");
// }

//==== if 寫法 ===================================
//只用 if 沒有else，代表第一個條件比對符合了，執行，然後繼續往下執行條件比對符合了，就跑
//就印出 2的倍數 3的倍數

if (number % 2 === 0) {
  console.log("2的倍數");
}
if (number % 3 === 0) {
  console.log("3的倍數");
}

// =====if 只有一行，大括號可以省略=========================================

//====原寫法========================
// if(true){
//     console.log("條件成立");
// }

//====省略大括號=============================
// if(true) console.log("條件成立");

//==== else if 其實就是 else + if ======================================
// else if不是一種結構，只是 else 加上 if
//if(布林值1){
//   statements
//   ...
// }else {
//  if(布林值2){
//   statements
//   ...
//      }
//  }

//if(布林值1){//條件成立才會執行
//   statements
//   ...

// }else if(布林值2){ //第一個條件不符合，第二個條件符合才會執行
//   statements
//   ...
// }
