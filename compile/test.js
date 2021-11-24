"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("./app/gilded-rose");
var items = [];
items.push(new gilded_rose_1.Item("Aged Brie", 20, 30));
items.push(new gilded_rose_1.Item("Backstage passes to a TAFKAL80ETC concert", 15, 30));
items.push(new gilded_rose_1.Item("Sulfuras, Hand of Ragnaros", 80, 30));
items.push(new gilded_rose_1.Item("Ariel", 1, 30));
items.push(new gilded_rose_1.Item("conjured", 5, 30));
var GR = new gilded_rose_1.GildedRose(items);
var respuesta1 = GR.updateQuality();
console.log(respuesta1);
