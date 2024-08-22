const arr = [1, 2, 3, 4, 5, 6, 7, "123123"];
//for 迴圈
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
  if (arr[i] === 4) {
    break;
  }
}

// for of
//不能操作index，要一個個跑
// for (const n of arr) {
//   console.log(n);
//   if (n === 4) {
//     break;
//   }
// }

// forEach
//用array method來做迭代
//forEach 裡面要的是function，要傳一個function
// 下面forEach不是個迴圈，它是個function，不能在這用break

//錯的
// arr.forEach((n) => {
//   console.log(n);
//   if(n === 4){
//     break;
//   }
// });
