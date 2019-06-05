import { SkirmisherBuilder } from "../unitTemplate/SkirmisherBuilder";
import { aerok } from "../../races/aerok/aerok";
import { flySoar } from "../unitProperty/unitPropertyActual/flySoar";

export const aerokSkirmisher = new SkirmisherBuilder()
  .setName("Aerok Skirmishers")
  .setRequires([aerok])
  .setCount(4)
  .setUnitProperty([flySoar])
  .build();
