import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapJungle = new MapTerrain(
  "MapJungle",
  [normalMGroup],
  4,
  [normalMoveType],
  false
);
