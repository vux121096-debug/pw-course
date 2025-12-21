// 1. Viết hàm multiply nhận 2 tham số a, b. In ra kết quả nhân của chúng. Gọi hàm với 2 cặp gía trị khác nhau.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 8));
console.log(multiply(5, 10));

//2. Viết hàm findMin nhập vào 3 tham số a,b,c trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin(a, b, c) {
  let minValue = a;
  if (b < minValue) {
    minValue = b;
  }
  if (c < minValue) {
    minValue = c;
  }
  return minValue;
}

let result1 = findMin(15, 49, 8);
console.log("Gia tri nho nhat cua result1 la:", result1);

let result2 = findMin(10, -5, 0);
console.log("Gia tri nho nhat cua result2 la:", result2);

/* 3. Viết hàm getTopStudents nhập 2 tham số:
- students: mảng các object, mỗi object chứa name và score
- threshold: ngưỡng điểm để được coi là top
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold. Gọi hàm với danh sách thực tế và in ra kết quả.
*/

const students = [
  { name: "Minh", score: 70 },
  { name: "Binh", score: 80 },
  { name: "Qui", score: 95 },
  { name: "Hoang", score: 92 },
  { name: "Thien", score: 90 },
  { name: "Vinh", score: 65 },
];

function getTopStudents(students, threshold) {
  const topNames = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topNames.push(students[i].name);
    }
  }
  return topNames;
}

console.log(getTopStudents(students, 80));

/* 4. Viết hàm calculateInterest nhận 3 tham số:
 - principal: số tiền gửi ban đầu
 - rate: lãi suất hàng năm
 - years: số năm gửi
 Hàm tính và trả về tổng số tiền (gốc + lãi) sau n năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years/100.
 Gọi hàm với ví dụ thưc tế và in kết quả.
 */

const principal = 10000000;
const rate = 7.5;
const years = 5;
function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years) / 100;
  return total;
}

const tongTien = calculateInterest(principal, rate, years);
console.log(`TONG SO TIEN SAU ${years} NAM LA: ${tongTien.toLocaleString()}`);
