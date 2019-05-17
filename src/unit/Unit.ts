import { Race } from "../races/Race";
import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";

export class Unit {
  readonly name: string;
  readonly race: Race;
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
    race: Race,
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
    this.race = race;
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
