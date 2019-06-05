import { ISpecification } from "./ISpecification";

export class OrSpecification<TSituation> implements ISpecification<TSituation> {
  private readonly original: Array<ISpecification<TSituation>>;
  constructor(...original: Array<ISpecification<TSituation>>) {
    this.original = original;
  }
  isSatisfiedBy(situation: TSituation): boolean {
      return this.original.some(function (specification) {
        return specification.isSatisfiedBy(situation)
      });
    // let pass = false;
    // for (const specification of this.original) {
    //   if (specification.isSatisfiedBy(situation)) pass = true;
    // }

    // return pass;
  }
}
