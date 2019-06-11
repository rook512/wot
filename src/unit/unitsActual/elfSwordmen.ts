import { SwordmenBuilder } from "../unitTemplate/SwordmenBuilder";
import { elf } from "../../races/elf/elf";

export const elfSwordmen = new SwordmenBuilder()
  .setName("Elven Swordmen")
  .addRequires([elf])
  .setCount(4)
  .setToHit(3)
  .setDefense(4)
  .build();
