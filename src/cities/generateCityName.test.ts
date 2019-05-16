import { generateCityName } from "./generateCityName";
import { human } from "../races/human";

it("generates a random name without crashing", () => {
  const cityName = generateCityName({
    randomCityNames: ["Something", "Other Thing"]
  });
  expect(cityName).toBeDefined();
});
it("generates a random name from a race", () => {
  const cityName = generateCityName(human);
  expect(cityName).toBeDefined();
});
