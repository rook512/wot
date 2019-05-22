import { Race } from "../races/Race";
import { BuildingResource } from "./BuildingResource";

export class Building {
  readonly name: string;
  readonly requires: Array<Building | Race>;
  readonly cost: Record<BuildingResource, number>;
  readonly upkeep: Record<BuildingResource, number>;
  constructor(
    name: string,
    requires: Array<Building | Race>,
    cost: Record<BuildingResource, number>,
    upkeep: Record<BuildingResource, number>
  ) {
    this.name = name;
    this.requires = requires;
    this.cost = cost;
    this.upkeep = upkeep;
  }
}
