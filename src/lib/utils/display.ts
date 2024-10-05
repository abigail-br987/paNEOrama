import { roundToDecimals } from "./math";

export const formatTimeSpeed = (timeSpeed: number) => {
    let distanceUnit = "day";
    let timeUnit = "second";
    let divisor = 1;

    const displayTimeSpeed = roundToDecimals(timeSpeed / divisor, 2);
    if (displayTimeSpeed !== 1) distanceUnit += "s";

    return `${displayTimeSpeed} ${distanceUnit} per ${timeUnit}`;
};
