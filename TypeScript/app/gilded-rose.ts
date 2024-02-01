export type SpecialItem = {
  name: "Aged Brie" | "Backstage passes to a TAFKAL80ETC concert" | "Sulfuras, Hand of Ragnaros";
}

/**
 * @description Item available to sell
 * @param name - name of the item
 * @param sellIn - the number of days we have to sell the items
 * @param quality - how valuable the item is
 */
export class Item {
  name: SpecialItem | string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * @description updates `sellIn` and `quality` after each day 
   * Once the sell by date has passed, Quality degrades twice as fast
   * The Quality of an item is never negative
   * "Aged Brie" actually increases in Quality the older it gets
   * The Quality of an item is never more than 50
   * "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
   * "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
   * Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
   * Quality drops to 0 after the concert
   * We have recently signed a supplier of conjured items. This requires an update to our system:
   * "Conjured" items degrade in Quality twice as fast as normal items
   * Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.
   * @returns the updated `Item`
   */
  updateQuality() {
    for (let item of this.items) {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (
            item.name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (
            item.name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (item.quality > 0) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality =
              item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
