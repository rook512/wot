import { SwordmenBuilder } from "../unitTemplate/SwordmenBuilder";
import { aerok } from "../../races/aerok/aerok";
import { flySoar } from "../unitProperty/unitPropertyActual/flySoar";

export const aerokSwordmen = new SwordmenBuilder()
  .setName("Aerok Swordmen")
  .setRequires([aerok])
  .setCount(4)
  .setUnitProperty([flySoar])
  .build();
