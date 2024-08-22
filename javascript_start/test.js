const james = {
  name: "james",
  phone: "0912345678",
  email: "james123@gmail.com",
};

//先把裡面的值取出來
const { name, phone, email } = james;
//舊的是要打物件名稱加點，才能取出值
// console.log(james.name);
console.log(name); //james
// console.log(james.phone);
console.log(phone); //0912345678
// console.log(james.email);
console.log(email); //james123@gmail.com

//function
// function printName(person) {
//     console.log(person.name);
//   }

//解構的方法
function printName({ name }) {
  console.log(name);
  console.log(phone);
}

printName(james); //james
//0912345678
