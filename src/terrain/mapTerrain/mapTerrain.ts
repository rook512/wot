import { MapTerrainGroup } from "./mapTerrainGroup/MapTerrainGroup";
import { MapMoveType } from "./mapMoveType/MapMoveType";

export class MapTerrain {
  readonly name: string;
  readonly terrainGroup: Array<MapTerrainGroup>;
  readonly moveCost: number;
  readonly moveType: Array<MapMoveType>;
  readonly water: boolean;
  constructor(
    name: string,
    terrainGroup: Array<MapTerrainGroup>,
    moveCost: number,
    moveType: Array<MapMoveType>,
    water: boolean
  ) {
    this.name = name;
    this.terrainGroup = terrainGroup;
    this.moveCost = moveCost;
    this.moveType = moveType;
    this.water = water;
  }
}
