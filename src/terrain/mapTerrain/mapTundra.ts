import { MapTerrain } from "./MapTerrain";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";
import { normalMoveType } from "./mapMoveType/normalMoveType";

export const mapTundra = new MapTerrain(
  "MapTundra",
  [normalMGroup],
  2,
  [normalMoveType],
  false
);
