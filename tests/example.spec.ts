import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://trieuquan27.github.io/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React/);
});

test("get Text", async ({ page }) => {
  await page.goto("https://trieuquan27.github.io/");

  // Click the get started link.
  await expect(page.getByText("My Tasks")).toHaveCSS("font-weight", "600");
});
