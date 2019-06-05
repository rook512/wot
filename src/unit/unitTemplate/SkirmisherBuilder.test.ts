import { SkirmisherBuilder } from "./SkirmisherBuilder";
import { UnitBuilder } from "../UnitBuilder";

it("creates a skirmisher unitbuilder", () => {
  const actual = new SkirmisherBuilder();
  expect(actual).toBeInstanceOf(UnitBuilder);
});
