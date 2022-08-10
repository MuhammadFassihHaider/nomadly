export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function createNnumberOfArray(lengthOfArray: number) {
    return Array(lengthOfArray)
        .fill("")
        .map((_, i) => i + 1);
}
