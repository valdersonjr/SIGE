export const formatDateToServer = (date: Date): string => {
    return `${date?.getUTCDate()}/${date?.getUTCMonth() + 1}/${date?.getUTCFullYear()}`;
}
