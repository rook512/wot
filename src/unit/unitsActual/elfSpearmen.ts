import { elf } from "../../races/elf/elf";
import { SpearmenBuilder } from "../unitTemplate/SpearmenBuilder";

export const elfSpearmen = new SpearmenBuilder()
  .setName("Elven Spearmen")
  .addRequires([elf])
  .setCount(4)
  .setToHit(2)
  .setDefense(2)
  .build();
