import { flySoar } from "../unitProperty/unitPropertyActual/flySoar";
import { aerok } from "../../races/aerok/aerok";
import { spearmen } from "../unitTemplate/spearmen";

export const aerokSpearmen = spearmen()
  .setName("Aerok Spearmen")
  .setRequires([aerok])
  .setCount(4)
  .setUnitProperty([flySoar])
  .build();
