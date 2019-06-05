export function generateCityName(race: {
  randomCityNames: Array<string>;
}): string {
  const names = race.randomCityNames;
  return names[Math.floor(Math.random() * names.length)];
}
