import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapPlains = new MapTerrain(
  "MapPlains",
  [normalMGroup],
  2,
  [normalMoveType],
  false
);
