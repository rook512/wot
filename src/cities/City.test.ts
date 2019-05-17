import { City } from "./City";
import { human } from "../races/human/human";
import { aerok } from "../races/aerok/aerok";
import { orc } from "../races/orc/orc";
import { elf } from "../races/elf/elf";

it("can create a human city without crashing", () => {
  const city = new City(human);
  expect(city.race).toBe(human);
});
it("has a human name", () => {
  const city = new City(human);
  expect(human.randomCityNames).toContain(city.name);
});
it("can create an aerok city without crashing", () => {
  const city = new City(aerok);
  expect(city.race).toBe(aerok);
});
it("has an aerok name", () => {
  const city = new City(aerok);
  expect(aerok.randomCityNames).toContain(city.name);
});
it("can create an orc city without crashing", () => {
  const city = new City(orc);
  expect(city.race).toBe(orc);
});
it("has an orc name", () => {
  const city = new City(orc);
  expect(orc.randomCityNames).toContain(city.name);
});
it("can create an elf city without crashing", () => {
  const city = new City(elf);
  expect(city.race).toBe(elf);
});
it("has an orc name", () => {
  const city = new City(elf);
  expect(elf.randomCityNames).toContain(city.name);
});
