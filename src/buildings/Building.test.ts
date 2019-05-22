import { Race } from "../races/Race";
import { Building } from "./Building";

it("creates a new building without creashing", () => {
  const race = new Race("Race", ["City Name"]);
  const buildingPrereq = new Building(
    "Building",
    [],
    { Production: 0, Magic: 0, Holy: 0 },
    { Production: 0, Magic: 0, Holy: 0 }
  );
  const building = new Building(
    "Building",
    [race, buildingPrereq],
    { Production: 0, Magic: 0, Holy: 0 },
    { Production: 0, Magic: 0, Holy: 0 }
  );
});
