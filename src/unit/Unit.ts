import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";
import { Race } from "../races/Race";
import { Building } from "../buildings/Building";
import { UnitResource } from "./UnitResource";
import { BuildingResource } from "../buildings/BuildingResource";

export class Unit {
  readonly name: string;
  readonly requires: Array<Building | Race>;
  readonly cost: Record<BuildingResource, number>;
  readonly upkeep: Record<UnitResource, number>;
  readonly movement: number;
  readonly count: number;
  readonly maxHealth: number;
  readonly toHit: number;
  readonly damage: number;
  readonly damageType: Array<DamageType>;
  readonly rangedToHit: number;
  readonly rangedDamage: number;
  readonly rangedDamageType: Array<DamageType>;
  readonly ammo: number;
  readonly defense: number;
  readonly armor: number;
  readonly resistance: number;
  readonly unitProperty: Array<UnitProperty>;
  constructor(
    name: string,
    requires: Array<Building | Race>,
    cost: Record<BuildingResource, number>,
    upkeep: Record<UnitResource, number>,
    movement: number,
    count: number,
    maxHealth: number,
    toHit: number,
    damage: number,
    damageType: Array<DamageType>,
    rangedToHit: number,
    rangedDamage: number,
    rangedDamageType: Array<DamageType>,
    ammo: number,
    defense: number,
    armor: number,
    resistance: number,
    unitProperty: Array<UnitProperty>
  ) {
    this.name = name;
    this.requires = requires;
    this.cost = cost;
    this.upkeep = upkeep;
    this.movement = movement;
    this.count = count;
    this.maxHealth = maxHealth;
    this.toHit = toHit;
    this.damage = damage;
    this.damageType = damageType;
    this.rangedToHit = rangedToHit;
    this.rangedDamage = rangedDamage;
    this.rangedDamageType = rangedDamageType;
    this.ammo = ammo;
    this.defense = defense;
    this.armor = armor;
    this.resistance = resistance;
    this.unitProperty = unitProperty;
  }
}
