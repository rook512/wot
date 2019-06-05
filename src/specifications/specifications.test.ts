import { ISpecification } from "./ISpecification";
import { NotSpecification } from "./NotSpecification";
import { AndSpecification } from "./AndSpecification";
import { OrSpecification } from "./OrSpecification";

const isPositive: ISpecification<number> = {
  isSatisfiedBy(n: number) {
    return n > 0;
  }
};

const isOdd: ISpecification<number> = {
  isSatisfiedBy(n: number) {
    return Math.abs(n) % 2 == 1;
  }
};

it("checks to see if a value is positive", () => {
  expect(isPositive.isSatisfiedBy(5)).toBe(true);
  expect(isPositive.isSatisfiedBy(-5)).toBe(false);
});

it("checks to see if a value is odd", () => {
  expect(isOdd.isSatisfiedBy(5)).toBe(true);
  expect(isOdd.isSatisfiedBy(-5)).toBe(true);
  expect(isOdd.isSatisfiedBy(6)).toBe(false);
});

it("checks to see if a value is not positive", () => {
  const target = new NotSpecification(isPositive);
  expect(target.isSatisfiedBy(5)).toBe(false);
  expect(target.isSatisfiedBy(-5)).toBe(true);
});

it("checks to see if a value is not odd", () => {
  const target = new NotSpecification(isOdd);
  expect(target.isSatisfiedBy(5)).toBe(false);
  expect(target.isSatisfiedBy(-5)).toBe(false);
  expect(target.isSatisfiedBy(6)).toBe(true);
});

it("checks to see if a value is odd and positive", () => {
  const target = new AndSpecification(isOdd, isPositive);
  expect(target.isSatisfiedBy(5)).toBe(true);
  expect(target.isSatisfiedBy(6)).toBe(false);
  expect(target.isSatisfiedBy(-5)).toBe(false);
});

it("checks to see if a value is odd or positive", () => {
  const target = new OrSpecification(isOdd, isPositive);
  expect(target.isSatisfiedBy(5)).toBe(true);
  expect(target.isSatisfiedBy(6)).toBe(true);
  expect(target.isSatisfiedBy(-5)).toBe(true);
  expect(target.isSatisfiedBy(-6)).toBe(false);
});
