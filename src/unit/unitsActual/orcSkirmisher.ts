import { SkirmisherBuilder } from "../unitTemplate/SkirmisherBuilder";
import { orc } from "../../races/orc/orc";

export const orcSkirmisher = new SkirmisherBuilder()
  .setName("Orcish Skimishers")
  .setRequires([orc])
  .setCount(8)
  .build();
