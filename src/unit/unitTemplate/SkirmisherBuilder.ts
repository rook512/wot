import { UnitBuilder } from "../UnitBuilder";
import { piercing } from "../damageType/damageTypesActual/piercing";
import { rangedWeapon } from "../unitProperty/unitPropertyActual/rangedWeapon";
import { huntingLodge } from "../../buildings/buildingsActual/huntingLodge";

export class SkirmisherBuilder extends UnitBuilder {
  constructor(isTest = false) {
    super(isTest);
    this.setCosts({ Production: 40 })
      .addRequires([huntingLodge])
      .setUpkeep({ Food: 1 })
      .setMovement(3)
      .setCount(6)
      .setMaxHealth(1)
      .setToHit(1)
      .setDamage(1)
      .addDamageType([piercing])
      .setRangedToHit(1)
      .setRangedDamage(1)
      .addRangedDamageType([piercing])
      .setAmmo(8)
      .setDefense(1)
      .setResistance(1)
      .addUnitProperty([rangedWeapon]);
  }
}
