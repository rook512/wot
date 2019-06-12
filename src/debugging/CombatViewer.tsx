import React from "react";
import { combat } from "../combat/Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";
import { elfSpearmen } from "../unit/unitsActual/elfSpearmen";
import { Unit } from "../unit/Unit";
import { orcSpearmen } from "../unit/unitsActual/orcSpearmen";

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
      <SimulateCombat attacker={humanSpearmen} defender={orcSpearmen} />
      <SimulateCombat attacker={orcSpearmen} defender={humanSpearmen} />
      <SimulateCombat attacker={elfSpearmen} defender={orcSpearmen} />
      <SimulateCombat attacker={orcSpearmen} defender={elfSpearmen} />
    </div>
  );
}
