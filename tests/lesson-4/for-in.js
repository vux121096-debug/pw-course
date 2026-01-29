const person = {
  personName: "Minh",
  age: 29,
  address: {
    city: "Da Nang",
    country: "Viet Nam",
  },
  isStudent: false,
};

for (let k in person) {
  console.log(`Key: ${k}`);
  console.log(`Value: ${person[k]}`);
}

const aPerson = {
  myName: "Alice",
  age: 30,
  city: "NY",
};

for (let key in aPerson) {
  console.log(key, ":", aPerson[key]);
}
