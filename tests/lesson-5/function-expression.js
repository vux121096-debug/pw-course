// Khai bao ham co tham so: name. Tra ve chuoi Hello <name>
const helloExp = function (name) {
  return `Hello ${name}`;
};
console.log(helloExp("Minh"));

// Khai bao ham co tham so: price, quantity, discount.
// Tra ve gia tri, biet gia tri = price * quantity - discount

const resultExp = function (price, quantity, discount) {
  return price * quantity - discount;
};
console.log(resultExp(5, 10, 20));
