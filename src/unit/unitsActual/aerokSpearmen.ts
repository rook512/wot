import { flySoar } from "../unitProperty/unitPropertyActual/flySoar";
import { piercing } from "../damageType/damageTypesActual/piercing";
import { UnitBuilder } from "../UnitBuilder";
import { aerok } from "../../races/aerok/aerok";

export const aerokSpearmen = new UnitBuilder()
  .setName("Aerok Spearmen")
  .setRequires([aerok])
  .setCosts({ Production: 30 })
  .setUpkeep({ Food: 1 })
  .setMovement(1)
  .setCount(4)
  .setMaxHealth(1)
  .setToHit(1)
  .setDamage(1)
  .setDamageType([piercing])
  .setDefense(1)
  .setResistance(1)
  .setUnitProperty([flySoar])
  .build();
