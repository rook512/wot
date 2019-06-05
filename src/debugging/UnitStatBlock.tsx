import React from "react";
import { Unit } from "../unit/Unit";
import { toPairs } from "./toPairs";
export function UnitStatBlock(props: { unit: Unit }) {
  return (
    <>
      <h2>{props.unit.name}</h2>
      <dl>
        <dt>Requires:</dt>
        <dd>{props.unit.requires.map(r => r.name).join(", ")}</dd>
        <dt>Cost</dt>
        <dd>
          {toPairs(props.unit.cost)
            .filter(({ value }) => value !== 0)
            // .sort((a, b) => b.value - a.value)
            .map(r => `${r.key[0]}${r.value}`)
            .join(", ")}
        </dd>
        <dt>Upkeep</dt>
        <dd>
          {toPairs(props.unit.upkeep)
            .filter(({ value }) => value !== 0)
            // .sort((a, b) => b.value - a.value)
            .map(r => `${r.key[0]}${r.key[1]}${r.value}`)
            .join(", ")}
        </dd>
        <dt>Movement:</dt>
        <dd>{props.unit.movement}</dd>
        <dt>Count:</dt>
        <dd>{props.unit.count}</dd>
        <dt>Max Health:</dt>
        <dd>{props.unit.maxHealth}</dd>
        <dt>To Hit:</dt>
        <dd>{props.unit.toHit}</dd>
        <dt>Damage:</dt>
        <dd>{props.unit.damage}</dd>
        <dt>Damage Type:</dt>
        <dd>{props.unit.damageType.map(r => r.name).join(", ")}</dd>
        <dt>Ranged To Hit:</dt>
        <dd>{props.unit.rangedToHit}</dd>
        <dt>Ranged Damage:</dt>
        <dd>{props.unit.rangedDamage}</dd>
        <dt>Ranged Damage Type:</dt>
        <dd>
          {props.unit.rangedDamageType.map(r => r.name).join(", ") || "<None>"}
        </dd>
        <dt>Ammo:</dt>
        <dd>{props.unit.ammo}</dd>
        <dt>Defense:</dt>
        <dd>{props.unit.defense}</dd>
        <dt>Resistance:</dt>
        <dd>{props.unit.resistance}</dd>
        <dt>Unit Properties:</dt>
        <dd>
          {props.unit.unitProperty.map(r => r.name).join(", ") || "<None>"}
        </dd>
      </dl>
    </>
  );
}
