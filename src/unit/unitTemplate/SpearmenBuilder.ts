import { UnitBuilder } from "../UnitBuilder";
import { piercing } from "../damageType/damageTypesActual/piercing";

export class SpearmenBuilder extends UnitBuilder {
  constructor(isTest = false) {
    super(isTest);
    this.setCosts({ Production: 30 })
      .setUpkeep({ Food: 1 })
      .setMovement(1)
      .setCount(6)
      .setMaxHealth(1)
      .setToHit(1)
      .setDamage(1)
      .setDamageType([piercing])
      .setDefense(1)
      .setResistance(1);
  }
}
