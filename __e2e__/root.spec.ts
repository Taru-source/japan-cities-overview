import { test, expect } from "@playwright/test";

test("should navigate to the root page", async ({ page }) => {
  // インデックスページからテストを開始 （ baseURL は playwright.config.ts の webServer を通じて設定される）
  await page.goto("/");

  const header = page.locator("header");
  await expect(header).toHaveText("Japan Cities Overview");

  const randomCity = page.locator(".random-city");
  await expect(randomCity).toBeVisible();
});
