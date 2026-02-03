import { test } from "@playwright/test";

test("Exercise 4", async ({ page }) => {
  // Step 1. Access the Material Playwright page
  await test.step("Access MP page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  // Step 2: Navigate to Bài học 4: Personal notes
  await test.step("Click on Bài học 4: Personal notes", async () => {
    await page.click("//a[text()='Bài học 4: Personal notes']");
  });
  // Step 3: Add 10 notes
  await test.step("Add 10 notes", async () => {
    await page.locator("//input[@id='note-title']").fill("click");
    await page
      .locator("//textarea[@id='note-content']")
      .fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("fill");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("type");
    await page
      .locator("//textarea[@id='note-content']")
      .type(
        "Hàm type dùng để nhập từng ký tự  1 vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("hover");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("check");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm check dùng để đánh dấu checkbox hoặc radiobutton, đảm bảo phần tử ở trạng thái checked",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("uncheck");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("selectOption");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("press");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm press dùng để mô phỏng việc nhấn phím từ bàn phím như Enter, Tab, Escape hoặc các phím khác",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("dblclick");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
      );
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='note-title']").fill("dragAndDrop");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm dragAndDrop dùng để kéo 1 phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
      );
    await page.click("//button[@id='add-note']");
  });
  // Search với keyword:"một hoặc nhiều"
  await page.locator("//input[@id='search']").fill("một hoặc nhiều");
});
