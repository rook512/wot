import { spearmen } from "./Spearmen";
import { UnitBuilder } from "../UnitBuilder";

it("creates a spearmen unitbuilder", () => {
  const actual = spearmen();
  expect(actual).toBeInstanceOf(UnitBuilder);
});
