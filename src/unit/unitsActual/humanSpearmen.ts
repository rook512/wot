import { human } from "../../races/human/human";
import { SpearmenBuilder } from "../unitTemplate/SpearmenBuilder";

export const humanSpearmen = new SpearmenBuilder()
  .setName("Human Spearmen")
  .addRequires([human])
  .setCosts({ Production: 20 })
  .build();
