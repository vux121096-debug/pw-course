// trim(): cat di khoang trang (space) o dau va cuoi cua moi chuoi

let className = "      eLearning Playwright";
console.log(className);
console.log(className.trim());

// toLowerCase() and toUpperCase()
console.log(className.trim().toLowerCase());
console.log(className.trim().toUpperCase());

// include(): ktra co chuoi con hay khong, tra ve gia tri boolean
console.log(className.includes("eLearning")); // true
console.log(className.includes("ELEARNING")); // false
console.log(className.toLowerCase().includes("elearning")); // true, neu muon dung tim gia tri tuong doi

// replace(a,b): thay the chuoi con bang chuoi khac, voi a la chuoi goc, b la chuoi moi
console.log(className.replace("Playwright", "Selenium"));
console.log(className.replace("abc", "cde")); // Neu khong tim thay chuoi con, thi khong thay doi gia tri

// split(): chia chuoi thanh mang (array)

let emails = "a@example.com, b@example.com, c@example.com, d@example.com";
const arrEmails = emails.split(", ");
console.log(arrEmails);

// substring():

let myClass = "e-Learning Playwright";
console.log(myClass.substring(0, 3)); // Lay tu vi tri index 0 den 3 -> in ra khong lay index 3
console.log(myClass.substring(11)); // Lay tu vi tri index 11 den het chuoi

// indexOf(): Tim vi tri bat dau cua chuoi

console.log(myClass.indexOf("Playwright")); // index bat dau cua chuoi la 11
console.log(myClass.indexOf("abc")); // output: -1
