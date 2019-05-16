import { generateCityName } from "./generateCityName";
import { Race } from "../races/Race";

export class City {
  race: Race;
  name: string;
  constructor(race: Race) {
    this.race = race;
    this.name = generateCityName(race);
  }
}
