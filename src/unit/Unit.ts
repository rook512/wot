import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";
import { Race } from "../races/Race";
import { Building } from "../buildings/Building";

export class Unit {
  readonly name: string;
  readonly requires: Array<Building | Race>;
  readonly upkeepFood: number;
  readonly upkeepMoney: number;
  readonly upkeepMagic: number;
  readonly upkeepHoly: number;
  readonly movement: number;
  readonly count: number;
  readonly health: number;
  readonly toHit: number;
  readonly damage: number;
  readonly damageType: Array<DamageType>;
  readonly defense: number;
  readonly armor: number;
  readonly resistance: number;
  readonly unitProperty: Array<UnitProperty>;
  constructor(
    name: string,
    requires: Array<Building | Race>,
    upkeepFood: number,
    upkeepMoney: number,
    upkeepMagic: number,
    upkeepHoly: number,
    movement: number,
    count: number,
    health: number,
    toHit: number,
    damage: number,
    damageType: Array<DamageType>,
    defense: number,
    armor: number,
    resistance: number,
    unitProperty: Array<UnitProperty>
  ) {
    this.name = name;
    this.requires = requires
    this.upkeepFood = upkeepFood;
    this.upkeepMoney = upkeepMoney;
    this.upkeepMagic = upkeepMagic;
    this.upkeepHoly = upkeepHoly;
    this.movement = movement;
    this.count = count;
    this.health = health;
    this.toHit = toHit;
    this.damage = damage;
    this.damageType = damageType;
    this.defense = defense;
    this.armor = armor;
    this.resistance = resistance;
    this.unitProperty = unitProperty;
  }
}
