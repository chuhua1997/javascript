// ======== loops(迴圈) =================
// 程式設計很重要概念
// 重複執行一段程式碼

// while & for 迴圈
//=========== while 迴圈 =================
// ========== while 語法==================

//  scope 概念在這也通用
//==== 運作模式===========================
// 小括號裡條件為 true ，就執行大括號裡的程式碼
// 執行完後，又再檢查布林值的條件，還是 true ，就再執行大括號裡的程式碼

// while (布林值){ //像css一樣
//     statements(陳述式)
//     ...
// }

let condition = true;

while (condition) {
  console.log("在迴圈裡面");
  condition = false;
}

console.log("結束");

// 跑得過程，conditionu 一開始是 true，在寫小括號是 true，有成立
// 跑 console.log 印出 在迴圈裡面
// 第三行 condition 是 false，然後又在回到上面，condition 是 false
// 就不會再跑進裡面，就跑到最後一行，就結束

// 無窮迴圈時，按 ctrl +C 跳出

// ============用迴圈跑減少撰寫程式碼數量=========================

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//迴圈迭代的變數命名，常用 i、j、k
// i<5，想跑 5 次

let i = 0; //這行 i 是 0
while (i < 5) {
  //跑到這檢查 i<5 嗎? 0<5 條件成立
  console.log(i + 1); // 印出 0+1，也就是1
  i++;
}
// 然後又回上面， 因為 i++，i=1，回上面
//1<5，1+1=2，印出2，i++，現在 i=2，回上面
// 2<5，跑程式，2+1=3，印出3，i++，i=3，回上面
// 3<5，跑程式，3+1=4，印出4，i++，i=4，回上面
// 4<5，跑程式，4+1=5，印出5，i++，i=5，回上面
// 5 不小於 5 ，迴圈結束
// 印出 1,2,3,4,5

// ============ 另一種寫法 印出 1,2,3,4,5 =========================

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

//=========== 無窮迴圈 ==============================
//然後又回上面， i  還是0，又繼續往下，變無窮迴圈
// let i = 0; //這行 i 是 0
// while (i < 5) {//跑到這檢查 i<5 嗎? 0<5 條件成立
//   console.log(i + 1); // 印出 0+1，也就是1
// }
