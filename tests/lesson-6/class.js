// Class

class Person {
  //thuoc tinh/ property
  name;
  role;

  // ham khoi tao/ constructor
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // phuong thuc/ method
  sayMyName() {
    console.log(`My name is ${this.name}. I am a ${this.role}`);
  }

  saySomething(message) {
    console.log(`Say something: ${message}`);
    return `Say something: ${message}`;
  }
}

const Minh = new Person("Minh", "Student");
const Vi = new Person("Vi", "Banker");
console.log(Minh);
console.log(Vi);
console.log(Vi.name, Vi.role);
Minh.sayMyName();
Vi.sayMyName();

Minh.saySomething(`Hello World`);
