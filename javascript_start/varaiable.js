//==== 變數的scope (範圍)，變數活多久==================

const globalVariable = "全域變數";

// if (true) {
//   //localVariable 這大括號內範圍
//   //大括號內是區域變數存活範圍
//   const localVariable = "區域變數";
//   console.log("globalVariable", globalVariable);
//   console.log("localVariable", localVariable);
//   if (true) {
//     const innerVariable = "內部變數"; //這個大括號範圍
//     console.log("globalVariable", globalVariable);
//     console.log("localVariable", localVariable);
//     console.log("innerVariable", innerVariable);
//   }
//   console.log("innerVariable", innerVariable);
// }

//==== 宣告兩個一樣名字的變數 ====================

// 內部的 a 是一個區域變數
// 僅在 if 敘述區塊中起作用。
// 因此，你在 if 敘述區塊中給 a 賦了一個新值 1 是合法的，
// 而不會違反常數的規則。

const a = 0;

if (true) {
  const a = 1; //這裡註解掉，就取用外層
  console.log(a); //1
} //印出1
//先取用內層，在取用外層

console.log(a); //0

//==== scope 是指{}內的範圍，不限於if ======================
