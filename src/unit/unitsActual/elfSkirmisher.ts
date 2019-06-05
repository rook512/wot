import { SkirmisherBuilder } from "../unitTemplate/SkirmisherBuilder";
import { elf } from "../../races/elf/elf";

export const elfSkirmisher = new SkirmisherBuilder()
  .setName("Elven Skirmishers")
  .setRequires([elf])
  .setCount(4)
  .setToHit(2)
  .setDamage(1)
  .setRangedToHit(2)
  .setRangedDamage(2)
  .setDefense(2)
  .build();
