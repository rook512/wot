import { combat, calculateDefenseDifferential } from "./Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";
import { elfSpearmen } from "../unit/unitsActual/elfSpearmen";

it("returns a damage number for combat", () => {
  const damageDealt = combat(humanSpearmen, humanSpearmen);
  expect(damageDealt).toBeGreaterThanOrEqual(0);
});

it("calculates human spearmen vs human spearmen differential", () => {
  const actual = calculateDefenseDifferential(humanSpearmen, humanSpearmen);
  expect(actual).toMatchSnapshot();
});

it("calculates elf spearmen vs human spearmen differential", () => {
  const actual = calculateDefenseDifferential(elfSpearmen, humanSpearmen);
  expect(actual).toMatchSnapshot();
});

it("calculates human spearmen vs elf spearmen differential", () => {
  const actual = calculateDefenseDifferential(humanSpearmen, elfSpearmen);
  expect(actual).toMatchSnapshot();
});
