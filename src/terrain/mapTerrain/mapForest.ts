import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapForest = new MapTerrain(
  "MapForest",
  [normalMGroup],
  3,
  [normalMoveType],
  false
);
