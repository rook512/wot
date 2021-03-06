import { SkirmisherBuilder } from "../unitTemplate/SkirmisherBuilder";
import { human } from "../../races/human/human";

export const humanSkirmisher = new SkirmisherBuilder()
  .setName("Human Skirmishers")
  .addRequires([human])
  .setCosts({ Production: 30 })
  .build();
