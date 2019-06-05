import { flySoar } from "../unitProperty/unitPropertyActual/flySoar";
import { aerok } from "../../races/aerok/aerok";
import { SpearmenBuilder } from "../unitTemplate/SpearmenBuilder";

export const aerokSpearmen = new SpearmenBuilder()
  .setName("Aerok Spearmen")
  .setRequires([aerok])
  .setCount(4)
  .setUnitProperty([flySoar])
  .build();
