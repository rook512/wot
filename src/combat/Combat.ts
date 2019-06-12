import { Unit } from "../unit/Unit";

// export function combat(attacker: Unit, defender: Unit) {
//   let attacks = 0;
//   const attackAttempts = attacker.count * attacker.damage;
//   for (let attackNumber = 0; attackNumber < attackAttempts; attackNumber++) {
//     attacks = attacks + flipCoin();
//   }
//   let blocks = 0;
//   const blockAttempts = defender.count * defender.defense;
//   for (let blockNumber = 0; blockNumber < blockAttempts; blockNumber++) {
//     blocks = blocks + flipCoin();
//   }
//   const results: number = attacks - blocks;
//   return Math.max(0, results);
// }

function flipCoin(chanceOf1: number) {
  if (Math.random() > chanceOf1) {
    return 1;
  } else {
    return 0;
  }
}

export function combat(attacker: Unit, defender: Unit) {
  let defenseDifferential = calculateDefenseDifferential(attacker, defender);
  let attacks = 0;
  for (let attackNumber = 0; attackNumber < attacker.count; attackNumber++) {
    attacks = attacks + flipCoin(defenseDifferential);
  }
  const damage = attacks * attacker.damage;
  let defenderArmor = defender.count * defender.armor;
  let saves = 0;
  for (let savesNumber = 0; savesNumber < defenderArmor; savesNumber++) {
    saves = saves + flipCoin(0.3);
  }
  return Math.max(0, damage - saves);
}

export function calculateDefenseDifferential(attacker: Unit, defender: Unit) {
  let defenseDifferential = 0;
  let attackerTotal = attacker.count * attacker.toHit;
  let defenderTotal = defender.count * defender.defense;
  if (attacker.toHit > defender.defense) {
    defenseDifferential = 0.5 + (attackerTotal - defenderTotal) * 0.1;
  } else if (attacker.toHit < defender.defense) {
    defenseDifferential = 0.5 + (attackerTotal - defenderTotal) * 0.1;
  } else {
    defenseDifferential = 0.5;
  }
  defenseDifferential = clamp(defenseDifferential, 0.3, 0.9);
  return defenseDifferential;
}

function clamp(original: number, min: number, max: number) {
  return Math.max(min, Math.min(max, original));
}
