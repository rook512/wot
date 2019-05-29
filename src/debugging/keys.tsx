export function keys<T extends {}>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
}
