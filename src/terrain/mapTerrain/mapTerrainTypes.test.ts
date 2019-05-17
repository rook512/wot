import { mapGrass } from "./mapGrass";
import { mapDesert } from "./mapDesert";
import { mapForest } from "./mapForest";
import { mapHills } from "./mapHills";
import { mapJungle } from "./mapJungle";
import { mapPlains } from "./mapPlains";
import { mapSnow } from "./mapSnow";
import { mapTundra } from "./mapTundra";

it("has loaded Desert", () => {
  expect(mapDesert).toBeDefined();
});
it("has loaded Forest", () => {
  expect(mapForest).toBeDefined();
});
it("has loaded Grassland", () => {
  expect(mapGrass).toBeDefined();
});
it("has loaded Hills", () => {
  expect(mapHills).toBeDefined();
});
it("has loaded Jungle", () => {
  expect(mapJungle).toBeDefined();
});
it("has loaded Plains", () => {
  expect(mapPlains).toBeDefined();
});
it("has loaded Snow", () => {
  expect(mapSnow).toBeDefined();
});
it("has loaded Tundra", () => {
  expect(mapTundra).toBeDefined();
});
