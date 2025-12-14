import { test } from "@playwright/test";

test("Basic actions", async ({ page }) => {
  await test.step("Navigate to Material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Bai Hoc 1", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  await test.step("Input form", async () => {
    await page.locator("//input[@id='username']").fill("Minh Vu");
    await page
      .locator("//input[@type='email']")
      .pressSequentially("minh.vut@one-line.com", { delay: 1_00 });
  });

  await test.step("Select options", async () => {
    let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    await page.locator("//input[@id='male']").check();
    isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    let isCheckedTraveling = await page
      .locator("//input[@value='traveling']")
      .isChecked();
    console.log(isCheckedTraveling);

    await page.locator("//input[@value='traveling']").check();
    isCheckedTraveling = await page
      .locator("//input[@value='traveling']")
      .isChecked();
    console.log(isCheckedTraveling);

    await page.locator("//option[@value='sports']").click();
    await page
      .locator("//select[@id='country']")
      .selectOption("United Kingdom");
  });

  await test.step("Upload files", async () => {
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/data-test/data-test.txt");
  });
});
