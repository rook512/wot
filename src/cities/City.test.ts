import { City } from "./City";
import { human } from "../races/human";

it("can create a human city without crashing", () => {
  const city = new City(human);
  expect(city.race).toBe(human);
});
it("has a human name", () => {
  const city = new City(human);
  expect(human.randomCityNames).toContain(city.name);
});
