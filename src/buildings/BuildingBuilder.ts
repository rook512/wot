import { Race } from "../races/Race";
import { BuildingResource } from "./BuildingResource";
import { Building } from "./Building";
export class BuildingBuilder {
  private wasNameSet = false;
  name: string = "Unnamed Building";
  requires: Array<Building | Race> = [];
  cost: Record<BuildingResource, number> = { Production: 0, Magic: 0, Holy: 0 };
  upkeep: Record<BuildingResource, number> = {
    Production: 0,
    Magic: 0,
    Holy: 0
  };

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
  setUpkeep(newUpkeep: Partial<Record<BuildingResource, number>>) {
    this.upkeep = { ...this.upkeep, ...newUpkeep };
    return this;
  }

  build(): Building {
    if (!this.wasNameSet) {
      throw new Error("Could not build Building; name was not set!");
    }
    return new Building(this.name, this.requires, this.cost, this.upkeep);
  }
}
