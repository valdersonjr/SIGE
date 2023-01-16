export const getCleanCurrencyValue = (value: string):number => {
    value = value.replace("R$", "");
    value = value.replaceAll(".", "");
    value = value.replaceAll(",", ".");
    return Number(value);
}