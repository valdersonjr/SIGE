export interface CreateStudentDto {
    responsavel_id: number;
    nome: string;
    email: string;
    data_nascimento: string;
    ativo: boolean;
    descricao_status: string;
}

export interface GetStudentDto {
    id: number,
    responsavel_id: number,
    nome: string,
    email: string,
    data_nascimento: string,
    ativo: boolean,
    descricao_status: string
}
