import { IReportsModalFilters } from "~/models/dataview";
import { ReportsEndpoints } from "~/utils/enums";

export const getReportType = (string:string):string => {
    if(ReportsEndpoints.ALUNOS === string) return "Alunos"
    else if(ReportsEndpoints.ANIVERSARIOS === string) return "Aniversários"
    else if(ReportsEndpoints.ATIVIDADES_EXTRA_CLASSE === string) return "Atividades Extra-Classe"
    else if(ReportsEndpoints.BOLETOS === string) return "Boletos"
    else if(ReportsEndpoints.CONTATO_TELEFONICO === string) return "Contato Telefônico"
    else if(ReportsEndpoints.CONTATO_TELEFONICO_ANIVERSARIO === string) return "Contato Telefônico - Aniversário"
    else if(ReportsEndpoints.PERIODOS === string) return "Períodos"
    else if(ReportsEndpoints.PERMISSAO_IMAGEM === string) return "Permissão de Imagem"
    return "Error";
}

export const getFilteredData = (endpoint:string, data: any, filters: IReportsModalFilters):any => {
    let filteredData = data;

    if(endpoint === ReportsEndpoints.ALUNOS && filteredData.length > 0){
        if(filters.studentsFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => (elem.ano === filters.studentsFilters.year));
        if(filters.studentsFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.studentsFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.studentsFilters.name));
    }
    else if(endpoint === ReportsEndpoints.ANIVERSARIOS && filteredData.length > 0){
        if(filters.birthdaysFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.birthdaysFilters.year);
        if(filters.birthdaysFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.birthdaysFilters.class);
        if(filters.birthdaysFilters.initialDate && filters.birthdaysFilters.finalDate){
            filteredData = filteredData.filter((elem:{ aluno_data_nascimento:string }) => {
                const studentFormatedBirthday = elem.aluno_data_nascimento.replaceAll("/", "-");
                return getIsDateInRange(studentFormatedBirthday, convertDateFormat(filters.birthdaysFilters.initialDate), convertDateFormat(filters.birthdaysFilters.finalDate));
            });
        }
    }
    else if(endpoint === ReportsEndpoints.ATIVIDADES_EXTRA_CLASSE && filteredData.length > 0){
        if(filters.extraClassAcitivitiesFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.extraClassAcitivitiesFilters.year);
        if(filters.extraClassAcitivitiesFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.extraClassAcitivitiesFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.extraClassAcitivitiesFilters.studentName));
        filteredData = filteredData.filter((elem:{ atividades:string }) => elem.atividades.includes(filters.extraClassAcitivitiesFilters.activity));
    }
    else if(endpoint === ReportsEndpoints.BOLETOS && filteredData.length > 0){
        if(filters.billsFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.billsFilters.year);
        if(filters.billsFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.billsFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.billsFilters.studentName));        
    }
    else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO && filteredData.length > 0){
        if(filters.phoneContactFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.phoneContactFilters.year);
        if(filters.phoneContactFilters.year) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.phoneContactFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.phoneContactFilters.studentName));
        filteredData = filteredData.filter((elem:{ mae: { nome:string } }) => elem.mae.nome.includes(filters.phoneContactFilters.fathersName));
        filteredData = filteredData.filter((elem:{ pai: { nome:string } }) => elem.pai.nome.includes(filters.phoneContactFilters.mothersName));
    }
    else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO_ANIVERSARIO && filteredData.length > 0){
        if(filters.birthdayPhoneContactFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.birthdayPhoneContactFilters.year);
        if(filters.birthdayPhoneContactFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.birthdayPhoneContactFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.birthdayPhoneContactFilters.studentsName));
        filteredData = filteredData.filter((elem:{ mae: { nome:string } }) => elem.mae.nome.includes(filters.birthdayPhoneContactFilters.fathersName));
        filteredData = filteredData.filter((elem:{ pai: { nome:string } }) => elem.pai.nome.includes(filters.birthdayPhoneContactFilters.mothersName));
    }
    else if(endpoint === ReportsEndpoints.PERIODOS && filteredData.length > 0){
        if(filters.periodFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.periodFilters.year);
        if(filters.periodFilters.classNPeriod) filteredData = filteredData.filter((elem:{periodo_id:string}) => elem.periodo_id == filters.periodFilters.classNPeriod);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.periodFilters.studentsName));
    }
    else if(endpoint === ReportsEndpoints.PERMISSAO_IMAGEM && filteredData.length > 0){
        if(filters.imagePermissionFilters.year) filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.imagePermissionFilters.year);
        if(filters.imagePermissionFilters.class) filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.imagePermissionFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.imagePermissionFilters.studentsName));
        filteredData = filteredData.filter((elem:{ divulgacao_imagem_rede:boolean }) => elem.divulgacao_imagem_rede === filters.imagePermissionFilters.allowedImageDisclosure);
    }

    return filteredData;
}

const convertDateFormat = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
}

const getIsDateInRange = (targetDate: string, startDate: string, endDate: string): boolean => {
    const [dateDay, dateMonth, dateYear] = targetDate.split("-");
    const [initialDay, initialMonth, initialYear] = startDate.split("-");
    const [endDay, endMonth, endYear] = endDate.split("-");
  
    const target = new Date(`${dateYear}-${dateMonth}-${dateDay}`);
    const start = new Date(`${initialYear}-${initialMonth}-${initialDay}`);
    const end = new Date(`${endYear}-${endMonth}-${endDay}`);

    const dateInRange = target >= start && target <= end;
  
    return dateInRange;
  }
  