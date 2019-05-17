import { MapTerrain } from "./MapTerrain";
import { normalMoveType } from "./mapMoveType/normalMoveType";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";

export const mapHills = new MapTerrain(
  "MapHills",
  [normalMGroup],
  4,
  [normalMoveType],
  false
);
