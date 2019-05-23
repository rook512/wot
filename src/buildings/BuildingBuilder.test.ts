import { Race } from "../races/Race";
import { BuildingBuilder } from "./BuildingBuilder";

const race = new Race("Race", ["City Name"]);
it("creates a new building without creashing", () => {
  const target = new BuildingBuilder(true);
  const actual = target.build();
  expect(actual).toBeDefined();
});

it("cannot create an unnamed building without creashing", () => {
  const target = new BuildingBuilder();
  expect(() => target.build()).toThrow();
});

it("allows us to easily set the building name", () => {
  const actual = new BuildingBuilder(true).setName("Granary").build();
  expect(actual.name).toEqual("Granary");
});

it("allows us to easily set the building cost", () => {
  const actual = new BuildingBuilder(true)
    .setCosts({ Production: 100 })
    .build();
  expect(actual.cost.Production).toEqual(100);
});

it("allows us to easily set multiple building costs", () => {
  const actual = new BuildingBuilder(true)
    .setCosts({ Production: 100, Holy: 50 })
    .build();
  expect(actual.cost.Production).toEqual(100);
  expect(actual.cost.Holy).toEqual(50);
});

it("allows us to easily set the upkeep", () => {
  const actual = new BuildingBuilder(true).setUpkeep({ Production: 1 }).build();
  expect(actual.upkeep.Production).toEqual(1);
});

it("allows us to easily set multiple upkeeps", () => {
  const actual = new BuildingBuilder(true)
    .setUpkeep({ Magic: 1, Holy: 1 })
    .build();
  expect(actual.upkeep.Magic).toEqual(1);
  expect(actual.upkeep.Holy).toEqual(1);
});
