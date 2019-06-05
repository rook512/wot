import { ISpecification } from "./ISpecification";

export class AndSpecification<TSituation>
  implements ISpecification<TSituation> {
  private readonly original: Array<ISpecification<TSituation>>;
  constructor(...original: Array<ISpecification<TSituation>>) {
    this.original = original;
  }
  isSatisfiedBy(situation: TSituation): boolean {
    for (const specification of this.original) {
      if (!specification.isSatisfiedBy(situation)) return false;
    }

    return true;
  }
}
