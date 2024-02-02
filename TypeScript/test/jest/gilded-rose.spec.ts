import { Item, GildedRose } from "@/gilded-rose";

// Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in Quality as they approach their sell by date.

// We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

// All items have a SellIn value which denotes the number of days we have to sell the items
// All items have a Quality value which denotes how valuable the item is
// At the end of each day our system lowers both values for every item
// Pretty simple, right? Well this is where it gets interesting:

// Once the sell by date has passed, Quality degrades twice as fast
// The Quality of an item is never negative
// "Aged Brie" actually increases in Quality the older it gets
// The Quality of an item is never more than 50
// "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
// "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
// Quality drops to 0 after the concert
// We have recently signed a supplier of conjured items. This requires an update to our system:

// "Conjured" items degrade in Quality twice as fast as normal items
// Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).

// Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

// #region NAME
describe("Item `name`", () => {
  it("should not alter item's name", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Kendama");
  });
});
// #endregion NAME
// #region SELLIN
describe("Item `sellIn` value", () => {
  it("should not alter item's name", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Kendama");
  });
  it("should update sellIn value even after date has passed", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
  });
});
// #endregion SELLIN
// #region QUALITY
describe("Item `quality` value", () => {
  it("should decrease quality by 1 on a regular item before its sellIn reaches 0", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 5, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
  });
  it("should decrease quality by 2 on a regular item after its sellIn has reached 0", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 0, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
  it("should never have a quality superior to 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should never have a quality inferior to 0", () => {
    const gildedRose = new GildedRose([new Item("Kendama", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
// #endregion QUALITY
// #region SPECIAL ITEMS
describe("Special items > Sulfuras", () => {
  // WRITE TESTS HERE
});
describe("Special items > Backstage passes", () => {
  // WRITE TESTS HERE
});
describe("Special items > Aged Brie", () => {
  // WRITE TESTS HERE
});
describe("Conjured items", () => {
  // WRITE TESTS HERE
});
// #endregion SPECIAL ITEMS
