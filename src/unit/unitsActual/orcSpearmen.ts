import { orc } from "../../races/orc/orc";
import { SpearmenBuilder } from "../unitTemplate/SpearmenBuilder";

export const orcSpearmen = new SpearmenBuilder()
  .setName("Orcish Spearmen")
  .setRequires([orc])
  .setCount(8)
  .build();
