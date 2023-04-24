export const booleanify = (value: string): boolean | undefined => {
    const truthy: string[] = [
        'true',
        'True',
        '1'
    ];

    const falsey: string[] = [
        'false',
        'False',
        '0'
    ];

    if (truthy.includes(value)) return true;
    else if(falsey.includes(value)) return false;
    else return undefined;
}
