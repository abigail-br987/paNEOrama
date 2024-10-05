// @ts-nocheck
import { DeepPartial } from "../types";

export const mergeInto = <T extends object>(
    target: T,
    newValues: DeepPartial<T>,
) => {
    for (const key in newValues) {
        if (
            typeof target[key] == "object" &&
            target[key] !== null &&
            target[key] !== undefined &&
            Object.getPrototypeOf(target[key]) === Object.prototype
        ) {
            mergeInto(target[key], newValues[key]);
        } else {
            target[key] = newValues[key];
        }
    }
};
