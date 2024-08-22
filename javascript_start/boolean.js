// ==== boolean 布林============
//比較跟賦值是不一樣的概念
// let x=3
// undefined
// > x==3
// true
// > x===3
// true
// > x=3，是把x設為3
// 3

// 兩種值 true 是 & false 否(條件不成立)
// 布林值用的運算子
// 寫code通常以 === 為主，== 易出現bug，視情況而定
// 比大小 等於 不等於 且、或
// == 值一樣就 true 、 === 型別與值都一樣才 true
//   >    ==   !=    &&
//   >=   ===  !==   ||
//   <
//   <=

// == 的相反 !=================================
// === 的相反 !==
// > 3=="3"
// true
// > 3 !="3"
// false
// > 3 ==="3"
// false
// > 3 !=="3"
// true

//==== && =======================
//把條件去串起來
//&& 且 ，兩邊都要成立才 true
//|| 或，其中一邊成立就 true
// > true && false
// false
// > 1<3 && 2>1
// true
// 優先順序&& 為4，<,>,>=,<=的優先順序為9，比大小先做

//====|| 或= 一邊成立即可 =======================
// true
// > true ||false
// true
// > false || true
// true
// > false || false
// false

// ==== ! 驚嘆號 (相反、否定) not ======
// ==== !true=>false (not true)
// ==== !false=>true (not false)
// > !false
// true
// > !true
// false
// > !(3>1)，要括號，驚嘆號優先順序最高
// false

//這兩句意思一樣
// > !(3>1)
// false
// > (3>1)==false
// false

//應用 比較兩個長方形面積
const height1 = 10;
const width1 = 5;

const height2 = 10.5;
const width2 = 4.4;

console.log(height1 * width1 > height2 * width2); //true
