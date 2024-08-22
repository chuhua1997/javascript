//選取網頁中(DOM)那個元素要做更動的

// 選 1 個 element
//querySelector 選要的 tag 名稱
//用一個常數去儲存它 const
//querySelector 這個方法直接給個p，只會選第一個出現的 p tag
const firstP = document.querySelector("p");
console.log(firstP);

//選第二個 p tag ，可以用 css 的 selector
//去選擇 class 等於 secomd 的 p tag
//也用一個常數去儲存

const sceondP = document.querySelector(".second");
console.log(sceondP);

//選取版權那個 p
//它是有id

const copyrightP = document.querySelector("#copyright");
console.log(copyrightP);

//選多個HTML元素
//選全部 p 標籤
//可以看到選到3個標籤，但那不是矩陣，是另外一種 object 叫log list
//這個 all 本身是一個log list
// 如果想單純印個別的 element，可以用像arrow方式，用中括號
//跟 array 一樣，也有 forEach 方法，可以個別印出 element

const allP = document.querySelectorAll("p");
console.log(allP);
console.log(allP[0]); //印出段落一
console.log(allP[1]); //印出段落二

//forEach 裡面是給一個 callback function ，這裡放一個arrow function
// 給一個參數 p
// 每一次 loop log list 時，就印一次出來
allP.forEach((p) => {
  console.log(p);
});

// 使用開發工具，copy element seletor
//設定常數存取值，然後copy的貼到querySelector，就能選到了

const headertitle = document.querySelector("body > h1");
console(headertitle);
