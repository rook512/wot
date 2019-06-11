import { SwordmenBuilder } from "../unitTemplate/SwordmenBuilder";
import { human } from "../../races/human/human";

export const humanSwordmen = new SwordmenBuilder()
  .setName("Human Swordmen")
  .addRequires([human])
  .setCosts({ Production: 35 })
  .build();
