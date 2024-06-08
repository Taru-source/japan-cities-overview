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
    const googleMapLink = await cityCard.locator("a.google-map-link");
    await expect(googleMapLink).toBeVisible();
  }
});
