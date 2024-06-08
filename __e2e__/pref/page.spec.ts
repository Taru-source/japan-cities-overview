import { test, expect } from "@playwright/test";

test("都道府県のページには都市の一覧が表示される -- 北海道の例", async ({
  page,
}) => {
  await page.goto("/pref/1");
  const cityCards = await page.getByTestId("city-card").all();
  for (const cityCard of cityCards) {
    await expect(cityCard).toBeVisible();
  }
});

test("都道府県のページには都市のGoogleマップリンクが表示される -- 北海道の例", async ({
  page,
}) => {
  await page.goto("/pref/1");
  const cityCards = await page.getByTestId("city-card").all();
  for (const cityCard of cityCards) {
    const googleMapLink = cityCard.locator("a.google-map-link");
    await expect(googleMapLink).toBeVisible();
  }
});

test("都道府県のページには都市の家賃が表示されている", async ({ page }) => {
  await page.goto("/pref/1");
  const cityCards = await page.getByTestId("city-card").all();
  for (const cityCard of cityCards) {
    const rent = cityCard.locator("city-rent");
    await expect(rent).toBeVisible();
    await expect(rent).toHaveText(/一人暮らしの家賃相場：/);
  }
});
