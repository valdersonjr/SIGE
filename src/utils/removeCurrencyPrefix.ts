export const removeCurrencyPrefix = (value: string | number): number => {
    if (String(value).indexOf('R') !== 0) {
        return Number(value);
    }
    return Number(String(value).trim().slice(2));
}
