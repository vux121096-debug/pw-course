//1. Tinh tong tu 1 den 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Tong tu 1 den 100 =", sum);

//2. In bang cuu chuong tu 2 den 9

for (let i = 2; i <= 9; i++) {
  console.log(`Bang cuu chuong ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//3. Tao 1 mang chua cac so le tu 1 den 99.

let soLe = [];
for (let k = 1; k < 100; k += 2) {
  soLe.push(k);
}
console.log("Mang chua so le:", soLe);

//4. In ra 10 email dua tren ten nguoi dung va so thu tu (vd: user1@example.com, user2@example.com)

let arrayEmail = [];
for (let q = 1; q <= 10; q++) {
  arrayEmail.push(`user${q}@example.com`);
}
console.log(arrayEmail);

//5. Tinh tong doanh thu cua 12 thang trong nam dua tren mang doanh thu da cho va in ra tong doanh thu.
//Cau truc object {"month": 2, "total":100}

const revenues = [
  { month: 1, total: 50 },
  { month: 2, total: 100 },
  { month: 3, total: 150 },
  { month: 4, total: 200 },
  { month: 5, total: 250 },
  { month: 6, total: 400 },
  { month: 7, total: 350 },
  { month: 8, total: 500 },
  { month: 9, total: 450 },
  { month: 10, total: 600 },
  { month: 11, total: 550 },
  { month: 12, total: 700 },
];

let totalRevenue = 0;

for (let i = 0; i < revenues.length; i++) {
  totalRevenue += revenues[i].total;
}

console.log("Tong doanh thu 12 tháng:", totalRevenue);
console.log(revenues.length);
