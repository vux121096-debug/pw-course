# Javascript & DOM & Playwright

### 1. Function Advance

- Function Expression
- Lambda Function
- Anonymous Function

#### a. Function Expression

- Định nghĩa function bằng cách gán biến cho function đó

```javascript
// Function Declaration (khai báo hàm)
function add(a, b) {
  return a + b;
}
console.log(add(4, 8)); // 12

// Function Expression (biểu thức hàm)
const addExp = function (a, b) {
  return a + b;
};
console.log(addExp(5, 10)); // 15
```

#### b. Lambda Function (Arrow Function)

- Còn gọi là **Arrow Function**
- Xuất hiện lần đầu tiên trong ES6 (ES2015)
- Sử dụng dấu `=>`

```javascript
const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(4, 9)); // 13
```

- Nếu chỉ có 1 dòng code có thể viết gọn, bỏ `{ return }` (implicit return)

```javascript
const addArrow2 = (a, b) => a + b;
console.log(addArrow2(4, 9));
```

- Truờng hợp không có tham số

```javascript
const greet = () => console.log("Hello!"); // Hello!
greet();
const getRandom = () => Math.random();
console.log(getRandom()); // random number
```

- Trường hợp chỉ có 1 tham số

```javascript
const square = (x) => x * x;
console.log(square(5)); // 25
```

#### b. Anonymous Function

- Là hàm không có tên
- Chỉ được sử dụng 1 lần ngay tại vị trí nó được định nghĩa
- Thường được sử dụng trong các trường hợp như callback function

```javascript
setTimeout(function () {
  console.log("This is an anonymous function!");
}, 1000);
```

Vi du khác với Arrow Function:

```javascript
// Named Function

function namedFunction() {
  console.log("This is a named function.");
};
namedFunction(); // This is a named function.

// Anonymous Function

function () { // SyntaxError: Không thể đứng 1 mình như này
    console.log("This is an anonymous function.");
}

// Anonymous function phải được gán cho biến hoặc sử dụng ngay

// 1. Gán cho biến

const anonFunc = function() {
    console.log("This is an anonymous function.");
};
anonFunc(); // This is an anonymous function.

// 2. Sử dụng ngay (ví dụ trong setTimeout)

setTimeout(function() {
    console.log("This is an anonymous function inside setTimeout.");
}, 1000);

// Ví dụ sử dụng

mapping array với Anonymous Function
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares); // [1, 4, 9, 16, 25]
```

### 2. DOM

- Khi vào 1 trang web, trình duyệt sẽ tải HTML, CSS, JS và xây dựng nên cấu trúc DOM (Document Object Model)
- DOM là một cây (tree) các node, trong đó mỗi thẻ HTML là một node
- Chúng ta có thể sử dụng JavaScript để thao tác với DOM: thêm, query, sửa đổi, xóa các phần tử trên trang web
- Cấu trúc DOM:

```
Document
  ├── html
      ├── head
      └── body
          ├── div (class="container")
          ├── p (id="paragraph")
          └── a (href="#")
```

- Một element sẽ là thẻ mở và thẻ đóng cùng với nội dung bên trong

```html
<div class="container">
  <!-- opening tag -->
  <p id="paragraph">Hello, DOM!</p>
  <!-- paragraph element -->
</div>
<!-- closing tag -->
```

- Thẻ tự đóng (self-closing tag) không có thẻ đóng

```html
<img src="image.jpg" alt="Image" /> <!-- thẻ tự đóng -->
<br />
<!-- self-closing tag -->
```

- Cú pháp chung của thẻ HTML:

```html
<tagname attribute="value">Content</tagname>

// tagname: tên thẻ HTML (div, p, a, img, ...) // attribute: thuộc tính của thẻ
(class, id, src, href, ...) // value: giá trị của thuộc tính // Content: nội
dung bên trong thẻ (có thể là text hoặc các thẻ con)
```

- Các thẻ tiêu chuẩn thường gặp
  Thẻ Cấu Trúc Cơ Bản:

```html
<!DOCTYPE html> <!-- Khai báo tài liệu HTML5 -->
<html> <!-- Thẻ gốc của trang HTML -->
  <head>
    <!-- Phần đầu trang, chứa metadata: title, link, meta, script -->
  </head>
  <body>
    <!-- Phần thân trang, chứa nội dung hiển thị -->
    <div></div>
    <!-- Thẻ khối (block-level element) -->
    <span></span>
    <!-- Thẻ inline (inline element) -->
  </body>
</html>
```

- Thẻ Nội Dung Văn Bản:

```html
<h1></h1>
đến
<h6></h6>
<!-- Tiêu đề từ cấp 1 đến cấp 6 -->
<p></p>
<!-- Đoạn văn bản -->
<a></a>
<!-- Liên kết -->
<img />
<!-- Hình ảnh -->
<ul></ul>
và
<ol></ol>
<!-- Danh sách không thứ tự và có thứ tự -->
<li></li>
<!-- Mục trong danh sách -->
```

- Thẻ Văn Bản (Quan trọng cho Testing)

```html
<form></form>
<!-- Biểu mẫu -->
<input /><input />
<!-- Trường nhập liệu (text, password, email, checkbox, radio,...) -->
<button></button>
<!-- Nút bấm -->
<select></select>
và
<option></option>
<!-- dropdown menu -->
<textarea></textarea>
<!-- Vùng nhập liệu văn bản -->
```

### 3. Selector

- Selector là cách để chọn các phần tử trong DOM để thao tác
- Các loại selector phổ biến:
  - XPath
  - CSS Selector
  - Playwright Selector

#### a. XPath Selector

- XPath (XML Path Language) là ngôn ngữ truy vấn để chọn các node trong tài liệu XML/HTML
- Có 2 loại XPath:
  - **Absolute XPath**: Đường dẫn tuyệt đối từ gốc đến phần tử
  - **Relative XPath (Nên dùng)**: Đường dẫn tương đối từ vị trí hiện tại đến phần tử
- Cú pháp Absolute XPath:

```xpath
/html/body/div/p
```

> Note:
>
> > Khi có nhiều **đối tượng giống nhau**, thì ta không thể dùng Absolute XPath vì nó sẽ **không xác định đúng phần tử cần thao tác.**
> >
> > > Phải đi dọc qua từng cấp để đến đúng phần tử mong muốn, rất dài dòng và dễ sai sót khi **cấu trúc DOM thay đổi.**

- Cú pháp Relative XPath:

```xpath
//tagname[@attribute='value']
```

vi du

```xpath
//input[@type='email']
// sử dụng đặc tính duy nhất để xác định phần tử
//a[text()='Bai hoc 1: Gioi thieu ve Playwright']
// sử dụng nội dung văn bản để xác định phần tử
```

- Một số ký hiệu quan trọng trong XPath:
  - `//`: Chọn tất cả các phần tử từ vị trí hiện tại
  - `@`: Chọn thuộc tính của phần tử
  - `*`: Chọn tất cả các phần tử
  - `text()`: Chọn phần tử dựa trên nội dung văn bản
  - `[]`: Dùng để lọc các phần tử theo điều kiện
  - `and`, `or`: Toán tử logic để kết hợp nhiều điều kiện
  - `contains()`: Chọn phần tử chứa giá trị cụ thể trong thuộc tính hoặc văn bản
  - `starts-with()`: Chọn phần tử có thuộc tính hoặc văn bản bắt đầu bằng giá trị cụ thể
  - `last()`: Chọn phần tử cuối cùng

#### b. CSS Selector

- Ngắn gọn, dễ đọc hơn XPath
- Dùng cho các trường hợp dễ tìm
- Không linh hoạt như XPath trong các trường hợp phức tạp
- Cú pháp CSS Selector:

vi du: `.add-to-cart-btn`

- Một số ký hiệu quan trọng trong CSS Selector:
  - `.`: Chọn phần tử theo class (ví dụ: `.classname`)
  - `#`: Chọn phần tử theo id (ví dụ: `#idname`)
  - `>`: Chọn phần tử con trực tiếp (ví dụ: `div > p`)
  - ` ` (khoảng trắng): Chọn phần tử con ở bất kỳ cấp độ nào (ví dụ: `div p`)
  - `*`: Chọn tất cả

### c. Playwright Selector

- Chỉ sử dụng trong Playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới việc viết test dễ đọc, dễ bảo trì, giống như người dùng tương tác với trang web
- Ví dụ: `page.getByText("Add to Cart")`

> Note: Khi nào dùng selector nào?
>
> > - Dùng Playwright Selector khi có thể (ưu tiên hàng đầu)
> > - Dùng XPath khi cần độ chính xác cao, phức tạp
> > - Dùng CSS Selector cho các trường hợp đơn giản, nhanh gọn

### 4. Playwright Basics

- Automation = Tương tác với trình duyệt (Browser) + Verify (Kiểm tra)
  - Tập trung học cách **tương tác với phần tử** trước

#### 4a. Viết 1 test

- **test**: Đơn vị cơ bản để khai báo 1 test
- Khai báo test trong file `.spec.js` hoặc `.spec.ts`

```javascript
import { test, expect } from "@playwright/test";
test("test name", async ({ page }) => {
  // Test steps go here - Code to interact with the page
});
```

#### 4b. Tổ chức thành các step rõ ràng

- **step**: Đơn vị nhỏ hơn test, mô tả các bước trong test để dễ đọc, dễ bảo trì
  > Lưu ý: step nên được map 1-1 test case để dễ quản lý

```javascript
await test.step("Step description", async () => {
  // Step actions go here
});
```

#### 4c. Tương tác cơ bản với Playwright

- Basic Actions (Các hành động cơ bản trong Playwright)
- **navigate**: Mở trang web

```javascript
await page.goto("https://example.com");
```

- **locate**: Tìm phần tử trên trang
- Sử dụng `page.locator("selector")` để chọn phần tử trên trang

```javascript
await page.locator("//input[@name='username']");
```

- **click**: Click vào phần tử

```javascript
// Single Click
await page.locator("//button").click();

// Double Click
await page.locator("//button").dblclick();

// Right Click
await page.locator("//button").click({ button: "right" });

// Click with Modifier Key (Ctrl, Alt, Shift, Meta)
await page.locator("//button").click({ modifiers: ["Control"] });
```

- **input**: Nhập dữ liệu vào trường input

```javascript
// Fill input field
await page.locator("//input[@name='username']").fill("myUsername");

// pressSequentially: Nhấn các phím liên tiếp
await page.locator("//input[@name='username']").pressSequentially("string", {
  delay: 100, // thời gian chờ giữa các phím
});

// Press with Modifier Key
await page
  .locator("//input[@name='username']")
  .press("A", { modifiers: ["Control"] }); // Ctrl + A to select all text
// Press special keys
await page.locator("//input[@name='username']").press("Enter"); // Nhấn Enter key
```

- **Radio/ Checkbox**: Chọn radio button hoặc checkbox

```javascript
// Check currently unchecked checkbox
const isChecked = await page.locator("//input[@type='checkbox']").isChecked();
// If not checked, then check it
if (!isChecked) {
  await page.locator("//input[@type='checkbox']").check();
}

// Check/ Uncheck checkbox directly
await page.locator("//input[@type='checkbox']").check(); // Check
await page.locator("//input[@type='checkbox']").uncheck(); // Uncheck
await page.locator("//input[@type='checkbox']").setChecked(true); // Check
await page.locator("//input[@type='checkbox']").setChecked(false); // Uncheck
```

- **selectOption**: Chọn giá trị trong dropdown menu

```javascript
await page.locator("//select[@id='dropdown']").selectOption("value1"); // Chọn theo value

await page
  .locator("//select[@id='dropdown']")
  .selectOption({ label: "Option 1" }); // Chọn theo label

await page.locator("//select[@id='dropdown']").selectOption({ index: 0 }); // Chọn theo index
```

- **uploadFile**: Tải file lên

```javascript
await page.locator("//input[@type='file']").setInputFiles("path/to/file.txt");
```

- **downloadFile**: Tải file về

```javascript
const [download] = await Promise.all([
  page.waitForEvent("download"), // Chờ sự kiện download bắt đầu
  page.locator("//a[@id='downloadLink']").click(), // Thực hiện hành động kích hoạt download
]);
// Lưu file về đường dẫn mong muốn
await download.saveAs("path/to/save/file.txt");
```

#### 4d. Verify (Kiểm tra)

- **expect**: Thư viện assertion tích hợp trong Playwright để kiểm tra trạng thái của phần tử hoặc trang web

```javascript
import { expect } from "@playwright/test";
await expect(page.locator("selector")).toHaveText("Expected Text");
```

---

## Kiến thức bổ sung

### 1. Hover over element

- **hover**: Di chuột qua phần tử

```javascript
await page.locator("selector").hover();
```

### 2. Xpath cho hàm text=()

- Cú pháp:
  `//tagname[text()='exact text']`
- Ví dụ:
  `//a[text()='Bai hoc 1: Gioi thieu ve Playwright']`

### 3. Xpath cho hàm contains()

- Đôi khi trong HTML, phần tử bị thừa khoảng trắng, hoặc có các ký tự đặc biệt, không chính xác, ta có thể dùng hàm `contains()` để tìm kiếm phần tử chứa giá trị đó.
- Cú pháp:
  `//tagname[contains(@attribute, 'partial value')]`
- Ví dụ:
  `//input[contains(@type, 'email')]`
  `//input[contains(text(), 'Login')]`

- Ví dụ khoảng trắng hoặc giá trị không ổn định:

```html
<div>Tôi là Alex</div>
// text node có khoảng trắng thừa
<div>Bây giờ là: 08:07</div>
// Thời gian sẽ tuỳ vào thời điểm truy cập trang web
```

```xpath
//div[contains(text(), 'Tôi là Alex')]
//div[contains(text(), 'Bây giờ là:')]
```

### 4. Confirmation Dialogs

- Khi thao tác trên trang web, đôi khi sẽ xuất hiện các hộp thoại xác nhận (confirmation dialogs) như alert, confirm, prompt.
- Playwright cung cấp cách để xử lý các hộp thoại này thông qua sự kiện `dialog`.

```javascript
page.on("dialog", async (dialog) => {
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept(); // Chấp nhận hộp thoại
  // await dialog.dismiss(); // Từ chối hộp thoại
});
```
