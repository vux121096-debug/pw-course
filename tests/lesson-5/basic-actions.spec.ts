import { test } from "@playwright/test";

test("Basic actions", async ({ page }) => {
  await test.step("Access to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Navigate to Bai Hoc 1", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  await test.step("Enter data into Username & Email", async () => {
    await page.locator("//input[@id='username']").fill("minh.vut");
    await page
      .locator("//input[@id='email']")
      .pressSequentially("vux121096@gmail.com", {
        delay: 1_00,
      });
  });

  await test.step("Select options on Gender and Hobbies", async () => {
    // Use .isChecked() to read and log the checkbox state (no UI change)
    let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    //Perform action: check the checkbox
    await page.locator("//input[@id='male']").check();

    // Verify state after the action
    isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    // Use .check() or .setChecked(true) to ensure the checkbox is checked
    // (Playwright will only click if needed)
    await page.locator("//input[contains(@id,'cooking')]").setChecked(true);
  });

  await test.step("Select Options in Interests and Country", async () => {
    await page
      .locator("//select[@id='interests']")
      .selectOption({ value: "sports" });

    await page.locator("//select[@id='country']").selectOption("uk");
  });

  await test.step("Upload File", async () => {
    await page
      .locator("//input[@type='file']")
      .setInputFiles("tests/data-test/data-test.txt");
  });
});
