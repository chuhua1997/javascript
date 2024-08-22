// 常見的陣列操作方法，包括：
//===============================================
// 宣告陣列
// 運用索引存取資料
// 列舉陣列內容：搭配迴圈
// 按順序操作資料：unshift, shift, pop, push
// 從中間操作資料：splice
// 合併兩個陣列：concat

//=============== 宣告陣列 ========================
//宣告一個空陣列

const n = [];

// 宣告時直接賦值
const number = [0, 1, 2, 3, 4];

//運用索引存取資料

const myFriends = ["Q1", "Q2", "Q3", "Q4", "Q5"];
console.log(myFriends[0]); //Q1

// 一個陣列有多少資料，可以使用 length

console.log(myFriends.length); //5

//索引從 0 開始，要找最大的索引可以運用 length - 1

console.log(myFriends.length - 1); //Q4

// 在知道索引的前提下，可以直接抽換陣列內的元素：
const yourFriends = ["派大星", "章魚哥", "小蝸", "蟹老闆", "珊迪"];
yourFriends[0] = "海綿寶寶";
console.log(yourFriends);

// [ '海綿寶寶', '章魚哥', '小蝸', '蟹老闆', '珊迪' ]
//派大星 被換成 海綿寶寶

//================ 列舉陣列內容：搭配迴圈 =============================

const nums = [0, 1, 2, 3, 4];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// 這邊設定次數上限是 i < nums.length 也可以寫成：

for (let i = 0; i <= nums.length - 1; i++) {
  console.log(nums[i]);
}

//================= 按順序操作資料===================================
// const nums = [0, 1, 2, 3, 4]; 上方已宣告

//============ pop() 方法 =====================================
//會移除並回傳陣列的最後一個元素。
// 此方法會改變陣列的長度。
// 回傳值，自陣列中移除的元素；若陣列為空，則為 undefined。
nums.pop();
console.log(nums); //[ 0, 1, 2, 3 ]，//4被移除

const lastNumber = nums.pop(); //如果 pop 再寫一次，再移一次後面的，是3，把移除的值存在變數 popped裡
console.log(lastNumber); //3;
console.log(nums); //剩下的就只剩 [ 0, 1, 2 ]

//================ push() 方法 ================================
// 會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

nums.push(5); //把 5 加到末端
console.log(nums); //[ 0, 1, 2, 5 ]

//添加到陣列
//新的長度以變數 total 表示。
var sports = ["scooter", "baseball"];
var total = sports.push("football", "swimming"); //回傳陣列的新長度

console.log(sports);
console.log(total);

//================shift() 方法 =============================
//會移除並回傳陣列的第一個元素。
// 此方法會改變陣列的長度。
//nums.shift(); 直接這樣用即可，我想存拿走的值下面才設一個變數存
// nums.shift();
const firstNumber = nums.shift(); //用變數來接回傳值
console.log(nums); //[ 1, 2, 5 ]
console.log(firstNumber); //0，0被去掉

//=============== unshift() 方法 =============================
// 會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。

nums.unshift(0.5);
console.log(nums); //[ 0.5, 1, 2, 5 ]
