import { Unit } from "../unit/Unit";

export function combat(attacker: Unit, defender: Unit) {
  let attacks = 0;
  const attackAttempts = attacker.count * attacker.damage;
  for (let attackNumber = 0; attackNumber < attackAttempts; attackNumber++) {
    attacks = attacks + flipCoin();
  }
  let blocks = 0;
  const blockAttempts = defender.count * defender.defense;
  for (let blockNumber = 0; blockNumber < blockAttempts; blockNumber++) {
    blocks = blocks + flipCoin();
  }
  const results: number = attacks - blocks;
  if (results <= 0) {
    return 0;
  } else {
    return results;
  }
}

function flipCoin() {
  if (Math.random() > 0.5) {
    return 1;
  } else {
    return 0;
  }
}
