const arr = [];
const arr2 = [1, 2, 3];
const arr3 = ["1", "2", "3"];
const arr4 = [1, "2", true, [], { name: "james" }];

console.log(typeof arr);

const arr5 = arr4; //arr5 和 arr4 指向記憶體裡面同一個東西
//所以改arr4，arr5也會被改到

// typeof
typeof arr; //陳述式 statement//object，做一個動作

console.log(arr.length); //0
console.log(arr3.length); //3

//indexing
console.log(arr2[0]);
//取範圍外的
console.log(arr[-1]); //undefined
console.log(arr[100]); //undefined

arr2[0] = 100;
console.log(arr2); //[ 100, 2, 3 ]
