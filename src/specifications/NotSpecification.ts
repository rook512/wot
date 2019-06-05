import { ISpecification } from "./ISpecification";

export class NotSpecification<TSituation>
  implements ISpecification<TSituation> {

  private readonly original: ISpecification<TSituation>;

  constructor(original: ISpecification<TSituation>) {
    this.original = original;
  }

  isSatisfiedBy(situation: TSituation): boolean {
    return !this.original.isSatisfiedBy(situation);
  }
}
