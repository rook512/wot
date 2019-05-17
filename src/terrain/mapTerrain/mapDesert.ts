import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapDesert = new MapTerrain(
  "MapDesert",
  [normalMGroup],
  2,
  [normalMoveType],
  false
);
