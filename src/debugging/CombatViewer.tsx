import React from "react";
import { combat } from "../combat/Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";
import { elfSpearmen } from "../unit/unitsActual/elfSpearmen";

export function CombatViewer() {
  return (
    <div>
      <h1>Combat Viewer</h1>
      <h2>Elven Spearmen vs Human Spearmen</h2>
      {combat(elfSpearmen, humanSpearmen)}
    </div>
  );
}
