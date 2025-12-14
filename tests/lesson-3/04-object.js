// 1.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(`Nam san xuat xe: ${car.year}`);

//2.
const person = {
  name: "Adele",
  address: {
    street: "Saint Event",
    city: "London",
    country: "England",
  },
};
console.log(person.address.street);

//3.
const student = {
  studentName: "John",
  grades: {
    math: 8,
    english: 10,
  },
};
console.log(`Diem mon Toan la ${student.grades["math"]}`);

//4.
const setting = {
  volume: 60,
  brightness: 80,
};
setting.volume = 80;
console.log("Updated value:", setting.volume);

//5.
const bike = {};
bike.color = "white";
console.log(bike);

//6.
const employee = {
  employeeName: "Erik",
  age: 35,
};
delete employee.age;
console.log(employee);

//7.
const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Dao", "Huong", "Giang"],
};
console.log(school);
