export const roundToDecimals = (num: number, decimals: number) => {
    const exp = 10 ** decimals;
    return Math.round(exp * num) / exp;
};

export function keplerSolve(e: number, M: number, dp: number): number {
    // orbital propagator stuff
    const pi = Math.PI;
    const K = pi / 180.0;
    const maxIter = 30;
    let i = 0;
    const delta = Math.pow(10, -dp);
    let E: number, F: number;
    let m = M / 360.0;
    m = 2.0 * pi * (m - Math.floor(m));
    if (e < 0.8) E = m;
    else E = pi;
    F = E - e * Math.sin(m) - m;
    while (Math.abs(F) > delta && i < maxIter) {
        E = E - F / (1.0 - e * Math.cos(E));
        F = E - e * Math.sin(E) - m;
        i = i + 1;
    }
    E = E / K;
    return Math.round(E * Math.pow(10, dp)) / Math.pow(10, dp);
}
export const trueAnom = (ec: number, E: number, dp: number): number => {
    // orbital propagator stuff
    const K = Math.PI / 180.0;
    const E_rad = E * K;
    const S = Math.sin(E_rad);
    const C = Math.cos(E_rad);
    const fak = Math.sqrt(1.0 - ec * ec);
    const phi = Math.atan2(fak * S, C - ec) / K;

    return Math.round(phi * Math.pow(10, dp)) / Math.pow(10, dp);
};

