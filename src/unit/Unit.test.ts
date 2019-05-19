import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";
import { Unit } from "./Unit";
import { Race } from "../races/Race";
import { Building } from "../buildings/Building";

it("creates a new unit without crashing", () => {
  const damageType = new DamageType("Damage Type");
  const unitProperty = new UnitProperty("Unit Property");
  const race = new Race("Race", ["City Name"]);
  const building = new Building("Building", [race], 100, 0, 0, 0, 0, 0);
  const unit = new Unit(
    "Anything",
    [race, building],
    1,
    0,
    0,
    0,
    2,
    6,
    1,
    1,
    1,
    [damageType],
    1,
    0,
    0,
    [unitProperty]
  );
});
