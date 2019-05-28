import { UnitBuilder } from "../UnitBuilder";
import { elf } from "../../races/elf/elf";
import { piercing } from "../damageType/damageTypesActual/piercing";

export const elfSpearmen = new UnitBuilder()
  .setName("Elven Spearmen")
  .setRequires([elf])
  .setCosts({ Production: 30 })
  .setUpkeep({ Food: 1 })
  .setMovement(1)
  .setCount(4)
  .setMaxHealth(1)
  .setToHit(2)
  .setDamage(1)
  .setDamageType([piercing])
  .setDefense(2)
  .setResistance(1)
  .setUnitProperty([])
  .build();
