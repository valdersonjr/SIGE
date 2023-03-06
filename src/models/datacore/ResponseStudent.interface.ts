export interface IRegister {
    ano: string,
    id_turma: number,
    descricao_turma: string
    descricao_periodo_turma:string;
    ensino:string;
}

export interface IFather {
    id: number;
    cpf: number;
    rg: string;
    nome: string;
    data_nascimento: string;
    sexo: string;
    email: string;
    telefone: string;
    telefone_celular: string;
    tipo: string;
    imagem_documento: any;
    ativo: boolean;
}

export interface IMother {
    id: number;
    cpf: string;
    rg: string;
    nome: string;
    data_nascimento: string;
    sexo: string;
    email: string;
    telefone: string;
    telefone_celular: string;
    tipo: string;
    imagem_documento: any;
    ativo: boolean
}



export interface ResponseStudent {
    id: number;
    pai_id: number;
    mae_id: number;
    nome: string;
    foto_aluno: any;
    data_nascimento: string;
    pais_juntos: boolean;
    responsavel_financeiro: string;
    nome_convenio_medico: string;
    imagem_convenio_medico: string;
    nome_hospital_preferencia: string;
    observacoes_medicas: string;
    ativo: true;
    descricao_status: string;
    pai: IFather;
    mae: IMother
    matriculas: IRegister[];
}
