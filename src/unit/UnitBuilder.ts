import { Building } from "../buildings/Building";
import { Race } from "../races/Race";
import { UnitResource } from "./UnitResource";
import { BuildingResource } from "../buildings/BuildingResource";
import { DamageType } from "./damageType/DamageType";
import { UnitProperty } from "./unitProperty/UnitProperty";
import { Unit } from "./Unit";

export class UnitBuilder {
  private wasNameSet = false;
  name: string = "Unnamed Unit";
  requires: Array<Building | Race> = [];
  cost: Record<BuildingResource, number> = { Production: 0, Magic: 0, Holy: 0 };
  upkeep: Record<UnitResource, number> = {
    Money: 0,
    Food: 0,
    Magic: 0,
    Holy: 0
  };
  movement: number = 0;
  count: number = 0;
  maxHealth: number = 0;
  toHit: number = 0;
  damage: number = 0;
  damageType: Array<DamageType> = [];
  rangedToHit: number = 0;
  rangedDamage: number = 0;
  rangedDamageType: Array<DamageType> = [];
  ammo: number = 0;
  defense: number = 0;
  armor: number = 0;
  resistance: number = 0;
  unitProperty: Array<UnitProperty> = [];

  constructor(isTest = false) {
    this.wasNameSet = isTest;
  }

  setName(name: string) {
    this.wasNameSet = true;
    this.name = name;
    return this;
  }
  setRequires(requires: Array<Building | Race>) {
    this.requires = requires;
    return this;
  }
  setCosts(newCost: Partial<Record<BuildingResource, number>>) {
    this.cost = { ...this.cost, ...newCost };
    return this;
  }
  setUpkeep(newUpkeep: Partial<Record<UnitResource, number>>) {
    this.upkeep = { ...this.upkeep, ...newUpkeep };
    return this;
  }
  setMovement(movement: number) {
    this.movement = movement;
    return this;
  }
  setCount(count: number) {
    this.count = count;
    return this;
  }
  setMaxHealth(maxHealth: number) {
    this.maxHealth = maxHealth;
    return this;
  }
  setToHit(toHit: number) {
    this.toHit = toHit;
    return this;
  }
  setDamage(damage: number) {
    this.damage = damage;
    return this;
  }
  setDamageType(damageType: Array<DamageType>) {
    this.damageType = damageType;
    return this;
  }
  setRangedToHit(rangedToHit: number) {
    this.rangedToHit = rangedToHit;
    return this;
  }
  setRangedDamage(rangedDamage: number) {
    this.rangedDamage = rangedDamage;
    return this;
  }
  setRangedDamageType(rangedDamageType: Array<DamageType>) {
    this.rangedDamageType = rangedDamageType;
    return this;
  }
  setAmmo(ammo: number) {
    this.ammo = ammo;
    return this;
  }
  setDefense(defense: number) {
    this.defense = defense;
    return this;
  }
  setArmor(armor: number) {
    this.armor = armor;
    return this;
  }
  setResistance(resistance: number) {
    this.resistance = resistance;
    return this;
  }
  setUnitProperty(unitProperty: Array<UnitProperty>) {
    this.unitProperty = unitProperty;
    return this;
  }

  build(): Unit {
    if (!this.wasNameSet) {
      throw new Error("Could not build Unit; name was not set!");
    }
    return new Unit(
      this.name,
      this.requires,
      this.cost,
      this.upkeep,
      this.movement,
      this.count,
      this.maxHealth,
      this.toHit,
      this.damage,
      this.damageType,
      this.rangedToHit,
      this.rangedDamage,
      this.rangedDamageType,
      this.ammo,
      this.defense,
      this.armor,
      this.resistance,
      this.unitProperty
    );
  }
}
