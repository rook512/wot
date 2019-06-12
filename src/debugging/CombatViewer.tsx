import React from "react";
import { combat } from "../combat/Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";
import { elfSpearmen } from "../unit/unitsActual/elfSpearmen";
import { Unit } from "../unit/Unit";

function SimulateCombat(props: { attacker: Unit; defender: Unit }) {
  return (
    <>
      <h2>
        {props.attacker.name} vs {props.defender.name}
      </h2>
      {combat(props.attacker, props.defender)}
    </>
  );
}

export function CombatViewer() {
  return (
    <div>
      <h1>Combat Viewer</h1>
      <SimulateCombat attacker={humanSpearmen} defender={elfSpearmen} />
      <SimulateCombat attacker={elfSpearmen} defender={humanSpearmen} />
    </div>
  );
}
