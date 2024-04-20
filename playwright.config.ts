import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000",
  },
});
