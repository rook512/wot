import React from "react";
import { UnitStatBlock } from "./UnitStatBlock";
import { allActualUnits } from "../unit/allActualUnits";

export function UnitViewer() {
  return (
    <div>
      <h1>Unit Viewer</h1>
      {allActualUnits.map((unit) => (
        <UnitStatBlock unit={unit} key={unit.name} />
      ))}
    </div>
  );
}
