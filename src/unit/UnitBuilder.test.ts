import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";
import { UnitBuilder } from "./UnitBuilder";

const dtype = new DamageType("Damage Type");
const uprop = new UnitProperty("Unit Property");

it("creates a new unit without crashing", () => {
  const target = new UnitBuilder(true);
  const actual = target.build();
  expect(actual).toBeDefined();
});

it("cannot create an unnamed unit without crashing", () => {
  const target = new UnitBuilder();
  expect(() => target.build()).toThrow();
});

it("allows us to easily set the unit name", () => {
  const actual = new UnitBuilder(true).setName("Spearmen").build();
  expect(actual.name).toEqual("Spearmen");
});

it("allows us to easily set the building cost", () => {
  const actual = new UnitBuilder(true).setCosts({ Production: 100 }).build();
  expect(actual.cost.Production).toEqual(100);
});

it("allows us to easily set multiple building costs", () => {
  const actual = new UnitBuilder(true)
    .setCosts({ Production: 100, Magic: 5 })
    .build();
  expect(actual.cost.Production).toEqual(100);
  expect(actual.cost.Magic).toEqual(5);
});

it("allows us to easily set the upkeep", () => {
  const actual = new UnitBuilder(true).setUpkeep({ Money: 10 }).build();
  expect(actual.upkeep.Money).toEqual(10);
});

it("allows us to easily set multiple upkeeps", () => {
  const actual = new UnitBuilder(true)
    .setUpkeep({ Money: 10, Holy: 5 })
    .build();
  expect(actual.upkeep.Money).toEqual(10);
  expect(actual.upkeep.Holy).toEqual(5);
});

it("allows us to easily set movement", () => {
  const actual = new UnitBuilder(true).setMovement(5).build();
  expect(actual.movement).toEqual(5);
});

it("allows us to easily set count", () => {
  const actual = new UnitBuilder(true).setCount(8).build();
  expect(actual.count).toEqual(8);
});

it("allows us to easily set Max Health", () => {
  const actual = new UnitBuilder(true).setMaxHealth(3).build();
  expect(actual.maxHealth).toEqual(3);
});

it("allows us to easily set To Hit", () => {
  const actual = new UnitBuilder(true).setToHit(5).build();
  expect(actual.toHit).toEqual(5);
});

it("allows us to easily set the damage", () => {
  const actual = new UnitBuilder(true).setDamage(5).build();
  expect(actual.damage).toEqual(5);
});

it("allows us to easily set the damage type", () => {
  const actual = new UnitBuilder(true).setDamageType([dtype]).build();
  expect(actual.damageType).toEqual([dtype]);
});

it("allows us to easily set the defense", () => {
  const actual = new UnitBuilder(true).setDefense(5).build();
  expect(actual.defense).toEqual(5);
});

it("allows us to easily set the armor", () => {
  const actual = new UnitBuilder(true).setArmor(5).build();
  expect(actual.armor).toEqual(5);
});

it("allows us to easily set the resistance", () => {
  const actual = new UnitBuilder(true).setResistance(5).build();
  expect(actual.resistance).toEqual(5);
});

it("allows us to easily set the unit properties", () => {
  const actual = new UnitBuilder(true).setUnitProperty([uprop]).build();
  expect(actual.unitProperty).toEqual([uprop]);
});
