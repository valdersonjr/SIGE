export const classOptions = [
    {value:"", label:""}, 
    {value: 'Berçário', label: 'Berçário'},
    {value: 'Jardim I', label: 'Jardim I'}, 
    {value: 'Jardim II', label: 'Jardim II'},
    {value: 'Maternal', label: 'Maternal'},
    {value: 'Maternal 2', label: 'Maternal 2'},
    {value: 'Minimaternal', label: 'Minimaternal'},
];

export const periodOptions = [
    {value:"", label:""}, 
    {value: 'Manhã', label: 'Manhã'}, 
    {value: 'Tarde', label: 'Tarde'},
    {value: 'Intermediário', label: 'Intermediário'},
    {value: 'Integral', label: 'Integral'},
];

export const scheduleOptions = [
    {value:"", label:""}, 
    {value: '07:30:00 - 12:30:00', label: '07:30:00 - 12:30:00'}, 
    {value: '10:30:00 - 15:30:00', label: '10:30:00 - 15:30:00'},
    {value: '13:30:00 - 18:30:00', label: '13:30:00 - 18:30:00'},
];

export const statusOptions = [
    {value:"", label:""}, 
    {value: 'Ativo', label: 'Ativo'}, 
    {value: 'Inativo', label: 'Inativo'}
];

export const getField = (name:string) :string => {
        if(name === "Turma") {
           return "class";
        }
        else if(name === "Período"){
           return "period";
        }
        else if(name === "Horário"){
           return "schedule";
        }
        else if(name === "Situação"){
           return "status";
        }
    return "";
}