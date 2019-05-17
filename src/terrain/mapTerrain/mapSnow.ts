import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapSnow = new MapTerrain(
  "MapSnow",
  [normalMGroup],
  2,
  [normalMoveType],
  false
);
