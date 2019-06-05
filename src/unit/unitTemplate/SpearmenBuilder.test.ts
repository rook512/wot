import { SpearmenBuilder } from "./SpearmenBuilder";
import { UnitBuilder } from "../UnitBuilder";

it("creates a spearmen unitbuilder", () => {
  const actual = new SpearmenBuilder();
  expect(actual).toBeInstanceOf(UnitBuilder);
});
