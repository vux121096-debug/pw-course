import { test } from "@playwright/test";

test("Input Register Form", async ({ page }) => {
  // Step 1: Access the Material Playwright page
  await test.step("Access the Material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  // Step 2: Navigate to 'Bai hoc 1: Register Page' form
  await test.step("Click on Bai hoc 1: Register Page", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  // Step 3: Input Username and Email
  await test.step("Input Username and Email", async () => {
    //Input Username
    await page.locator("//input[@id='username']").fill("vtm1210");

    //Input Email
    await page
      .locator("//input[@id='email']")
      .pressSequentially("vux121096@gmail.com", {
        delay: 1_00,
      });
  });

  // Step 4: Select Gender & Hobbies
  await test.step("Check on Gender & Hobbies", async () => {
    let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    await page.locator("//input[@id='male']").check();
    isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    await page.locator("//input[@id='cooking']").setChecked(true);
  });

  // Step 5: Select Options in Dropdown of Interests and Country
  await test.step("Select option in Interests and Country", async () => {
    await page
      .locator("//select[@id='interests']")
      .selectOption({ value: "sports" });

    await page.locator("//select[@id='country']").selectOption({ value: "uk" });
  });

  // Step 6: Input DOB
  await test.step("Input DOB", async () => {
    await page
      .locator("//input[@id='dob']")
      .pressSequentially("12-10-1996", { delay: 1_50 });
  });

  //Step 7: Upload file
  await test.step("Upload File", async () => {
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/data-test/data-test.txt");
  });

  //Step 8: Input Biography
  await test.step("Input Biography", async () => {
    await page
      .locator("//textarea[@id='bio']")
      .fill(
        "Name: Alex Morgan\nDate of Birth: March 14, 1992\nPlace of Birth: Austin, Texas, USA\nProfession: Software Engineer"
      );
  });

  //Step 9: Select Rate us and Favorite color
  await test.step("Select Rate Us and Fav Color", async () => {
    await page.locator("//input[@id='rating']").fill("9");
    await page.locator("//input[@type='color']").fill("#34b3ea");
  });

  //Step 10: Check tooltip by Hover on and check on Checkbox
  await test.step("Newsletter tooltip and Checkbox", async () => {
    await page.locator("//div[@class='tooltip']").hover();
    await page.waitForTimeout(1_000);

    let isCheckedNewsletter = await page
      .locator("//input[@id='newsletter']")
      .isChecked();
    console.log(isCheckedNewsletter);

    await page.locator("//input[@id='newsletter']").check();
    isCheckedNewsletter = await page
      .locator("//input[@id='newsletter']")
      .isChecked();
    console.log(isCheckedNewsletter);
  });

  // Step 10: Enable Toggle
  await test.step("Enable toggle and", async () => {
    await page.locator("//span[@class='slider round']").click();
  });

  // I dont know how to interact with Rating Star so I leave it as default.
  await test.step("", async () => {
    await page.click("//div[@data-rating='4.5']");
  });
  //Step 11: Input Custom Date -> Run test cannot fill data into the date input field. Is that a bug?
  await test.step("Input Custom Date", async () => {
    await page
      .locator("//input[@id='customDate']")
      .pressSequentially("16012026", { delay: 1_50 });
  });

  //Step 12: Click on Register button
  await test.step("Click on Register button", async () => {
    await page.click("//button[@type='submit']");
  });
});
