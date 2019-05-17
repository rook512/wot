import { MapTerrain } from "./MapTerrain";
import { normalMoveType } from "./mapMoveType/normalMoveType";
import { normalMGroup } from "./mapTerrainGroup/normalMGroup";

export const mapGrass = new MapTerrain(
  "MapGrass",
  [normalMGroup],
  2,
  [normalMoveType],
  false
);
