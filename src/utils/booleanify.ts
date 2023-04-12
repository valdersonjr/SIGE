export const booleanify = (value: string): boolean | string => {
    if (value === "") return value;

    const truthy: string[] = [
        'true',
        'True',
        '1'
    ];

    return truthy.includes(value);
}
