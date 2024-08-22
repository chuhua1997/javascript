// create object
const obj = {
  a: "1",
  number: 1234,
};

//james
const james = {
  name: "james",
  phone: "0912345678",
  email: "james123@gmail.com",
};
//access field (取出屬性property 就是值)
console.log(james.name);
console.log(james.phone);
console.log(james.email);
console.log(james);

//typeof(確認型別)
console.log(typeof james);

//改變屬性裡的值
//change value
james.email = "jamse456@gmail.com.tw";
//增加屬性
james.postal = 234;

console.log(james);
