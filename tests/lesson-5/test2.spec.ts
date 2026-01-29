import { test } from "@playwright/test";

test("Verify adding products to cart successfully", async ({ page }) => {
  //Step 1: Access Material Playwright page
  await test.step("Access Material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  //Step 2: Navigate to Bai hoc 2: Product page
  await test.step("Navigate to Bai hoc 2: Product page", async () => {
    await page.click("//a[text()='Bài học 2: Product page']");
  });
  //Step 3: Add 2 items of product 1.
  await test.step("Add 2 items of product 1", async () => {
    await page
      .locator("//button[@data-product-id='1']")
      .click({ clickCount: 2 });
  });
  //Step 4: Add 3 items of product 2.
  await test.step("Add 3 items of product 2", async () => {
    await page
      .locator("//button[@data-product-id='2']")
      .click({ clickCount: 3 });
  });
  //Step 5: Add 1 item of product 3.
  await test.step("", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
});
