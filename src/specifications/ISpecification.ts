export interface ISpecification<TSituation> {
    isSatisfiedBy(situation: TSituation):boolean
}