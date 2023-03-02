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
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.studentsFilters.year);
        // filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.studentsFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.studentsFilters.name));
    }
    else if(endpoint === ReportsEndpoints.ANIVERSARIOS && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.birthdaysFilters.year);
        filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.birthdaysFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_data_nascimento:string }) => getIsDateInRange(elem.aluno_data_nascimento, filters.birthdaysFilters.initialDate, filters.birthdaysFilters.finalDate));
        //filtro de tipo (mae, pai aluno) - pensar na logistica
    }
    else if(endpoint === ReportsEndpoints.ATIVIDADES_EXTRA_CLASSE && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.extraClassAcitivitiesFilters.year);
        filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.extraClassAcitivitiesFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.extraClassAcitivitiesFilters.studentName));
        filteredData = filteredData.filter((elem:{ atividades:string }) => elem.atividades.includes(filters.extraClassAcitivitiesFilters.activity));
    }
    else if(endpoint === ReportsEndpoints.BOLETOS && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.billsFilters.year);
        filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.billsFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.billsFilters.studentName));        
    }
    else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.phoneContactFilters.year);
        filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.phoneContactFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.phoneContactFilters.studentName));
        filteredData = filteredData.filter((elem:{ mae: { nome:string } }) => elem.mae.nome.includes(filters.phoneContactFilters.fathersName));
        filteredData = filteredData.filter((elem:{ pai: { nome:string } }) => elem.pai.nome.includes(filters.phoneContactFilters.mothersName));
    }
    else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO_ANIVERSARIO && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.birthdayPhoneContactFilters.year);
        filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.birthdayPhoneContactFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.birthdayPhoneContactFilters.studentsName));
        filteredData = filteredData.filter((elem:{ mae: { nome:string } }) => elem.mae.nome.includes(filters.birthdayPhoneContactFilters.fathersName));
        filteredData = filteredData.filter((elem:{ pai: { nome:string } }) => elem.pai.nome.includes(filters.birthdayPhoneContactFilters.mothersName));
    }
    else if(endpoint === ReportsEndpoints.PERIODOS && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.periodFilters.year);
        //filtro de turma-periodo
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.periodFilters.studentsName));
    }
    else if(endpoint === ReportsEndpoints.PERMISSAO_IMAGEM && filteredData.length > 0){
        filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === filters.imagePermissionFilters.year);
        // filteredData = filteredData.filte    r((elem:{ turma_descricao:string }) => elem.turma_descricao === filters.imagePermissionFilters.class);
        filteredData = filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(filters.imagePermissionFilters.studentsName));
        filteredData = filteredData.filter((elem:{ divulgacao_imagem_rede:boolean }) => elem.divulgacao_imagem_rede === filters.imagePermissionFilters.allowedImageDisclosure);
    }

    return filteredData;
}

export const getIsDateInRange = (date: string, initialDate: string, endDate: string): boolean => {
    const dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const dateParts = date.match(dateFormat);
    const initialDateParts = initialDate.match(dateFormat);
    const endDateParts = endDate.match(dateFormat);
  
    if (!dateParts || !initialDateParts || !endDateParts) {
      throw new Error('Invalid date format. Please use the format dd/mm/yyyy.');
    }
  
    const parsedDate = new Date(parseInt(dateParts[3]), parseInt(dateParts[2]) - 1, parseInt(dateParts[1]));
    const parsedInitialDate = new Date(parseInt(initialDateParts[3]), parseInt(initialDateParts[2]) - 1, parseInt(initialDateParts[1]));
    const parsedEndDate = new Date(parseInt(endDateParts[3]), parseInt(endDateParts[2]) - 1, parseInt(endDateParts[1]));
  
    return parsedDate >= parsedInitialDate && parsedDate <= parsedEndDate;
  };