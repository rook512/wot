import { combat, calculateDefenseDifferential } from "./Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";
import { elfSpearmen } from "../unit/unitsActual/elfSpearmen";
import { orcSpearmen } from "../unit/unitsActual/orcSpearmen";
import { Unit } from "../unit/Unit";

function testCombatDifferential(attacker: Unit, defender: Unit) {
  it(
    "calculates " + attacker.name + " vs " + defender.name + " differential",
    () => {
      const actual = calculateDefenseDifferential(attacker, defender);
      expect(actual).toMatchSnapshot();
    }
  );
}

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

it("calculates orc spearmen vs human spearmen differential", () => {
  const actual = calculateDefenseDifferential(orcSpearmen, humanSpearmen);
  expect(actual).toMatchSnapshot();
});

it("calculates orc spearmen vs elf spearmen differential", () => {
  const actual = calculateDefenseDifferential(orcSpearmen, elfSpearmen);
  expect(actual).toMatchSnapshot();
});

it("calculates human spearmen vs orc spearmen differential", () => {
  const actual = calculateDefenseDifferential(humanSpearmen, orcSpearmen);
  expect(actual).toMatchSnapshot();
});

testCombatDifferential(elfSpearmen,orcSpearmen);
