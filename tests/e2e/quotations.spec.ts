import { expect, test } from '@playwright/test';

/**
 * These tests rely on the three exemplar quotations named in the authoring
 * guide, so they pass however many others are written.
 */
test.describe('quotations', () => {
  test('the page says what it holds and draws a line for every entry', async ({ page }) => {
    await page.goto('/quotations/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('How the New Testament reads the Old');
    await expect(page.locator('.quotation-diagram__head')).toHaveText(/Old Testament\s*New Testament/);
    const listed = await page.locator('.quotation-list__item').count();
    expect(listed).toBeGreaterThanOrEqual(3);
    await expect(page.locator('.quotation-diagram__lines a')).toHaveCount(listed);
    await expect(page.locator('.quotation-diagram__legend dt').first()).toHaveText('Stated fulfilment');
    // The Old Testament stands in the order of its books.
    const books = await page.locator('.quotation-diagram__books--earlier li').allTextContents();
    expect(books.map((book) => book.trim()).indexOf('Isaiah')).toBeLessThan(books.map((book) => book.trim()).indexOf('Hosea'));
  });

  test('the page leads to what is recorded and what is not', async ({ page }) => {
    await page.goto('/quotations/');
    await page.getByRole('link', { name: 'What is recorded here, and what is not' }).click();
    await expect(page).toHaveURL(/\/about\/#quotations$/);
    await expect(page.locator('#quotations')).toHaveText('The Old Testament in the New');
    await expect(page.locator('.about')).toContainText('The site does not count prophecies.');
  });

  test('choosing a book shows only its quotations', async ({ page }) => {
    await page.goto('/quotations/');
    await page.getByRole('button', { name: 'Hosea' }).click();
    const items = page.locator('.quotation-list__item:visible');
    await expect(items).toHaveCount(1);
    await expect(items).toContainText('Out of Egypt I called my son');
    await page.getByRole('button', { name: 'Show all' }).click();
    await expect(page.locator('.quotation-list__item[hidden]')).toHaveCount(0);
  });

  test('an entry sets the two passages side by side in the words of the World English Bible', async ({ page }) => {
    await page.goto('/quotations/hos-11-1-in-matt-2-15/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Out of Egypt I called my son');
    const passages = page.locator('.quotation__passage');
    await expect(passages.nth(0)).toContainText('Hosea 11:1');
    await expect(passages.nth(0)).toContainText('and called my son out of Egypt.');
    await expect(passages.nth(1)).toContainText('Matthew 2:15');
    await expect(passages.nth(1)).toContainText('“Out of Egypt I called my son.”');
    await expect(page.locator('.quotation__kind-note')).toContainText('Stated fulfilment. The New Testament text itself says');
    await expect(page.locator('.quotation__kind-note')).toContainText('World English Bible');
    await expect(page.locator('.prose a.cite--source').first()).toHaveAttribute('href', 'https://ebible.org/eng-Brenton/HOS11.htm');
    // Both passages belong to events of the timeline.
    await expect(page.locator('.event-list')).toHaveCount(2);
    await expect(page.locator('.event-list').first()).toContainText('Amos and Hosea');
    await expect(page.locator('.event-list').last()).toContainText('The Birth of Jesus');
  });

  test('where the translations differ the earlier words are left out, and the entry says so', async ({ page }) => {
    await page.goto('/quotations/isa-7-14-in-matt-1-22/');
    const earlier = page.locator('.quotation__passage').nth(0);
    await expect(earlier.locator('.quotation__text')).toHaveCount(0);
    await expect(earlier.locator('.quotation__omitted')).toContainText('the versions of this passage differ');
    await expect(page.locator('.prose')).toContainText('“the young woman”');
    // Each reading has its document.
    const sources = page.locator('#sources');
    await expect(sources).toContainText('The Septuagint');
    await expect(sources).toContainText('Dialogue with Trypho');
    await expect(sources).toContainText('Against Heresies');
  });

  test('a prophet whom the Gospel names is reported, not asserted', async ({ page }) => {
    await page.goto('/quotations/zech-11-12-in-matt-27-9/');
    await expect(page.locator('.entry-header .lead')).toContainText('fulfils words of Jeremiah');
    await expect(page.locator('.quotation__passage').nth(0)).toContainText('Zechariah 11:12–13');
  });

  test('the events on both sides list the quotation', async ({ page }) => {
    await page.goto('/events/birth-of-jesus/');
    const here = page.locator('section[aria-labelledby="quotations-title"]');
    await expect(here.getByRole('heading', { level: 3 })).toHaveText('Earlier words quoted here');
    await expect(here.getByRole('link', { name: 'Out of Egypt I called my son' })).toHaveAttribute(
      'href',
      '/quotations/hos-11-1-in-matt-2-15/',
    );
    await page.goto('/events/amos-and-hosea/');
    const later = page.locator('section[aria-labelledby="quotations-title"]');
    await expect(later.getByRole('heading', { level: 3 })).toHaveText('Words from here, quoted later');
    // The event may list other quotations too; this one names both passages.
    await expect(later.locator('.quotation-list__item', { hasText: 'Out of Egypt I called my son' }).locator('.quotation-list__passages')).toContainText(
      'Hosea 11:1 in Matthew 2:15',
    );
  });

  test('in German the page is in German and the entries say that they are not translated yet', async ({ page }) => {
    await page.goto('/de/quotations/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Wie das Neue Testament das Alte liest');
    await expect(page.locator('.quotation-diagram__legend dt').first()).toHaveText('Ausdrückliche Erfüllung');
    await page.goto('/de/quotations/hos-11-1-in-matt-2-15/');
    await expect(page.locator('[data-translation="missing"]')).toBeVisible();
    await expect(page.locator('.quotation__passage').nth(0)).toContainText('Hosea 11,1');
  });
});

test.describe('quotations without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the drawing and the list are complete', async ({ page }) => {
    await page.goto('/quotations/');
    const listed = await page.locator('.quotation-list__item').count();
    expect(listed).toBeGreaterThanOrEqual(3);
    await expect(page.locator('.quotation-diagram__lines a')).toHaveCount(listed);
    await expect(page.locator('.quotation-diagram button:visible')).toHaveCount(0);
  });
});
