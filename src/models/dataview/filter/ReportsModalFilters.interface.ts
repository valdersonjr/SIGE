export interface IStudentsReportsModalFilters {
    name: string;
    year: string;
    class: string;
}

export interface IBirthdaysReportsModalFilters {
    year: string;
    class: string;
    initialDate: string;
    finalDate:string;
    registerType: string;
}

export interface IExtraClassActivitiesReportsModalFilters {
    year: string;
    class: string;
    studentName: string;
    activity: string;
}

export interface IBillsReportsModalFilters {
    year: string;
    class: string;
    studentName: string;   
}

export interface IPhoneContactReportsModalFilters {
    year: string;
    class: string;
    studentName: string;
    fathersName: string;
    mothersName: string;
}

export interface IBirthDayPhoneContactReportsModalFilters {
    year: string;
    class: string;
    studentsName: string;
    fathersName: string;
    mothersName: string;
}

export interface IPeriodsReportsModalFilters {
    year: string;
    classNPeriod: string;
    studentsName: string;
}

export interface IImagePermissionReportsModalFilters {
    year: string;
    class: string;
    studentsName: string;
    allowedImageDisclosure: boolean;
}

export interface IReportsModalFilters {
    studentsFilters: IStudentsReportsModalFilters;
    birthdaysFilters: IBirthdaysReportsModalFilters;
    extraClassAcitivitiesFilters: IExtraClassActivitiesReportsModalFilters;
    billsFilters: IBillsReportsModalFilters;
    phoneContactFilters: IPhoneContactReportsModalFilters;
    birthdayPhoneContactFilters: IBirthDayPhoneContactReportsModalFilters;
    periodFilters: IPeriodsReportsModalFilters;
    imagePermissionFilters: IImagePermissionReportsModalFilters;
}