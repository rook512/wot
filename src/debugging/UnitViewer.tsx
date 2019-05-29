import React from "react";
import { UnitStatBlock } from "./UnitStatBlock";
import * as units from "../unit/unitsActual";

export function UnitViewer() {
  return (
    <div>
      <h1>Unit Viewer</h1>
      {Object.values(units).map(unit => (
        <UnitStatBlock unit={unit} key={unit.name} />
      ))}
    </div>
  );
}
