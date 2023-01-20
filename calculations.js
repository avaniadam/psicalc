function calculatePsi(temp, vol, pct) {
    const kelvinTemp = temp + 273.15;
    const gasSolubilityConstantNumerator = (4.8 + (3934.4 / kelvinTemp)) - (941290.2 / (kelvinTemp * kelvinTemp));
    const gasSolubilityConstant = Math.exp(gasSolubilityConstantNumerator);
    let psi = (((gasSolubilityConstant * vol) / ((1237.65 * pct) / 100)) * 14.7) - 14.7;
    if (pct > 60) {
        psi = Math.min(psi, 35);
    } else {
        psi = Math.min(psi, 45);
    }
    return psi.toFixed(2);
}