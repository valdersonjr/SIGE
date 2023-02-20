export enum Endpoints {
    ALUNOS = "alunos",
    ANIVERSARIOS = "aniversarios",
    ATIVIDADES_EXTRA_CLASSE = "atividades-extra-classe",
    BOLETOS = "boletos",
    CONTATO_TELEFONICO = "contato-telefonico",
    CONTATO_TELEFONICO_ANIVERSARIO = "contato-telefonico-aniversario",
    PERIODOS = "periodos",
    PERMISSAO_IMAGEM = "permissao-imagem"
}

export const getReportType = (string:string):string => {
    if(Endpoints.ALUNOS === string) return "Alunos"
    else if(Endpoints.ANIVERSARIOS === string) return "Aniversários"
    else if(Endpoints.ATIVIDADES_EXTRA_CLASSE === string) return "Atividades Extra-Classe"
    else if(Endpoints.BOLETOS === string) return "Boletos"
    else if(Endpoints.CONTATO_TELEFONICO === string) return "Contato Telefônico"
    else if(Endpoints.CONTATO_TELEFONICO_ANIVERSARIO === string) return "Contato Telefônico - Aniversário"
    else if(Endpoints.PERIODOS === string) return "Períodos"
    else if(Endpoints.PERMISSAO_IMAGEM === string) return "Permissão de Imagem"
    return "Error";
}