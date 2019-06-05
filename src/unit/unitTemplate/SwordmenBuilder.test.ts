import { SwordmenBuilder } from "./SwordmenBuilder";
import { UnitBuilder } from "../UnitBuilder";

it("creates a swordmen unitbuilder", () => {
  const actual = new SwordmenBuilder();
  expect(actual).toBeInstanceOf(UnitBuilder);
});
