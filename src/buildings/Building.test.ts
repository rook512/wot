import { Race } from "../races/Race";
import { Building } from "./Building";

it("creates a new building without creashing", () => {
  const race = new Race("Race", ["City Name"]);
  const buildingPrereq = new Building("Building", [], 0, 0, 0, 0, 0, 0);
  const building = new Building(
    "Building",
    [race, buildingPrereq],
    0,
    0,
    0,
    0,
    0,
    0
  );
});
