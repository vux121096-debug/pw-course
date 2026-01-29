import { test } from "@playwright/test";

test("Add 100 todo items then delete odd items", async ({ page }) => {
  // Access to the Marterial Playwright page
  await page.goto("https://material.playwrightvn.com/");

  // Navigate to Bai hoc 3: Todo page
  await page.locator("//a[text()='Bài học 3: Todo page']").click();

  // Add 100 todo items
  for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
    await page.click("//button[@id='add-task']");
    console.log(i);
  }
  // Delete odd items
  page.on("dialog", (dialog) => dialog.accept());
  for (let j = 100; j >= 1; j--) {
    if (j % 2 !== 0) {
      await page.locator(`//button[@id='todo-${j}-delete']`).click();
      console.log(`remove todo ${j}`);
    }
  }
});
