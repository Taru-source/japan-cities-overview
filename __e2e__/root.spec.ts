import { test, expect } from "@playwright/test";

test("should navigate to the root page", async ({ page }) => {
  // インデックスページからテストを開始 （ baseURL は playwright.config.ts の webServer を通じて設定される）
  await page.goto("/");

  const header = page.locator("header");
  await expect(header).toHaveText("Japan Cities Overview");

  const randomCity = page.locator(".random-city");
  await expect(randomCity).toBeVisible();
});

test("都道府県の一覧を見ることが出来る", async ({ page }) => {
  await page.goto("/");

  const prefCards = await page.getByTestId("pref-card").all();
  expect(prefCards).toHaveLength(47);
});
