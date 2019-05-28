import { UnitBuilder } from "../UnitBuilder";
import { orc } from "../../races/orc/orc";
import { piercing } from "../damageType/damageTypesActual/piercing";

export const orcSpearmen = new UnitBuilder()
  .setName("Orcish Spearmen")
  .setRequires([orc])
  .setCosts({ Production: 30 })
  .setUpkeep({ Food: 1 })
  .setMovement(1)
  .setCount(8)
  .setMaxHealth(1)
  .setToHit(1)
  .setDamage(1)
  .setDamageType([piercing])
  .setDefense(1)
  .setResistance(1)
  .setUnitProperty([])
  .build();
