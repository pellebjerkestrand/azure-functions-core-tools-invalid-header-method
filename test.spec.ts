import { test } from "@playwright/test";

test("Root Request", async ({ page }) => {
  await page.goto("https://localhost:7072");
});
