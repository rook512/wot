import { keys } from "./keys";
export function toPairs<T extends {}>(o: T): {
    key: keyof T;
    value: T[keyof T];
}[] {
    return keys(o).map(key => ({ key, value: o[key] }));
}
