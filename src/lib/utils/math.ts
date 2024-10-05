export const roundToDecimals = (num: number, decimals: number) => {
    const exp = 10 ** decimals;
    return Math.round(exp * num) / exp;
};
