import { combat } from "./Combat";
import { humanSpearmen } from "../unit/unitsActual/humanSpearmen";

it("returns a damage number for combat",() =>{
    const damageDealt = combat(humanSpearmen, humanSpearmen);
    expect(damageDealt).toBeGreaterThanOrEqual(0)
})