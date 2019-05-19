import { Race } from "../races/Race";

export class Building {
  name: string;
  requires: Array<Building | Race>;
  costProd: number;
  costMagic: number;
  costHoly: number;
  upkeepProd: number;
  upkeepMagic: number;
  upkeepHoly: number;
  constructor(
    name: string,
    requires: Array<Building | Race>,
    costProd: number,
    costMagic: number,
    costHoly: number,
    upkeepProd: number,
    upkeepMagic: number,
    upkeepHoly: number
  ) {
    this.name = name;
    this.requires = requires;
    this.costProd = costProd;
    this.costMagic = costMagic;
    this.costHoly = costHoly;
    this.upkeepProd = upkeepProd;
    this.upkeepMagic = upkeepMagic;
    this.upkeepHoly = upkeepHoly;
  }
}
