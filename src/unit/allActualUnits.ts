import { Unit } from "./Unit";

export const allActualUnits = (function(context) {
  try {
    const requireUnit = context();
    return (requireUnit.keys() as string[]).reduce(
      (prev: Unit[], key: string) => {
        prev.push(
          ...(Object.values(requireUnit(key)).filter(
            entry => entry instanceof Unit
          ) as Unit[])
        );
        return prev;
      },
      [] as Unit[]
    );
  } catch (ex) {
    return [];
  }
})(() => (require as any).context("./unitsActual", false, /\.ts$/));
