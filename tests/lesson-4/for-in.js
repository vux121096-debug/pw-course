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
