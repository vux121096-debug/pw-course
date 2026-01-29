// Khai bao ham co tham so: name. Tra ve chuoi Hello <name>

const { disconnect } = require("process");

const helloArrow = (myName) => {
  return `Hello ${myName}`;
};
console.log(helloArrow("Minh"));

// Khai bao ham co tham so: price, quantity, discount.
// Tra ve gia tri, biet gia tri = price * quantity - discount

const resultArrow = (price, quantity, discount) => {
  return price * quantity - discount;
};
console.log(resultArrow(5, 10, 20));

// Có thể viết gọn khi có 1 dòng code

const helloArrow1 = (myName) => `Hello ${myName}`;
console.log(helloArrow1("Minh"));

const resultArrow1 = (price, quantity, discount) => price * quantity - discount;
console.log(resultArrow1(5, 10, 20));

// Khong co tham so, phai co dau () rong

const greeting = () => console.log("Hello");
greeting();
const getRandom = () => Math.random();
console.log(getRandom());

// Co 1 tham so co the bo dau () , tuy style

const helloArrow2 = (myName) => `Hello ${myName}`;
console.log(helloArrow2("Minh 1 tham so"));
