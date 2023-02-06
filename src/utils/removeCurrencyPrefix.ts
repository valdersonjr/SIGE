export const removeCurrencyPrefix = (value: string): number => {
    value = value.replace(/[^\d,]/g, '');
    value = value.replace(/,/g, '.');

    return Number(value);
}

export const replaceCommaWithDot = (value:number):string => {
    return `${value.toFixed(2).replace('.', ',')}`;
}