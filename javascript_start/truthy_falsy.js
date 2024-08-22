// ++ ，可以放在變數前跟變數後
// let i = 0;
// console.log(i++); //0，一開始還沒做加，這行結束才加
// console.log(i); //1，加完了
// console.log("_________"); //相隔線
// i = 0; //重新將i的值設為0
// console.log(++i); //1，expressions表達式的值是是已經加完的值,(陳述式:一個動作_console.log)
// console.log(i); //1

//==== truthy & falsy===============================
//truthy 會被當成條件成立，不是true 這個值，但會當成條件成立
//falsy 會被當成條件不成立，不是 false 這個值，但會當成條件不成立

// truthy       falsy
//   -1        0 數字零
//    1        ""
//   -2        null
//    2        ""
//   "0"字串零  undefined
//   dassad

// const value = 0;
// const value = 1;
// const value = -1;
// const value = "";
// const value = "123";
// const value = "0"; //字串零是truthy
// const value = null;
const value = undefined;

// 把值放進value，如果是truthy，條件就是符合
if (value) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//====== 寫法教學 ==============================
//不是布林的值直接放到條件裡面，可以寫得明確一些

// 空字串是falsy
if (someValue !== "") {
  console.log("Truthy"); //不等於空字串，表達式行為)最後會化成真正的布林值，就是 true or false(
}
