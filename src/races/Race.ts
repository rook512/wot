export class Race {
  readonly name: string;
  readonly randomCityNames: Array<string>;

  constructor(name: string, randomCityNames: Array<string>) {
    this.name = name;
    this.randomCityNames = randomCityNames;
  }
}
