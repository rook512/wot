import { Resource } from "../Resource";

export type UnitResource =
  | Resource.Money
  | Resource.Magic
  | Resource.Holy
  | Resource.Food;
