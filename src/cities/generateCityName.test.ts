import { generateCityName } from "./generateCityName";
import { human } from "../races/human/human";
import { elf } from "../races/elf/elf";
import { aerok } from "../races/aerok/aerok";
import { orc } from "../races/orc/orc";

it("generates a random name without crashing", () => {
  const cityName = generateCityName({
    randomCityNames: ["Something", "Other Thing"]
  });
  expect(cityName).toBeDefined();
});
it("generates a random human name", () => {
  const cityName = generateCityName(human);
  expect(cityName).toBeDefined();
});
it("generates a random aerok name", () => {
  const cityName = generateCityName(aerok);
  expect(cityName).toBeDefined();
});
it("generates a random orc name", () => {
  const cityName = generateCityName(orc);
  expect(cityName).toBeDefined();
});
it("generates a random elf name", () => {
  const cityName = generateCityName(elf);
  expect(cityName).toBeDefined();
});