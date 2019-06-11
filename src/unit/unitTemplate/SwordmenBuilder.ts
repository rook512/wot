import { UnitBuilder } from "../UnitBuilder";
import { piercing } from "../damageType/damageTypesActual/piercing";
import { slashing } from "../damageType/damageTypesActual/slashing";
import { smithy } from "../../buildings/buildingsActual/smithy";
import { largeShield } from "../unitProperty/unitPropertyActual/largeShield";

export class SwordmenBuilder extends UnitBuilder {
  constructor(isTest = false) {
    super(isTest);
    this.setCosts({ Production: 40 })
      .addRequires([smithy])
      .setUpkeep({ Food: 1 })
      .setMovement(2)
      .setCount(6)
      .setMaxHealth(1)
      .setToHit(2)
      .setDamage(2)
      .addDamageType([piercing, slashing])
      .setDefense(3)
      .setResistance(1)
      .addUnitProperty([largeShield]);
  }
}
