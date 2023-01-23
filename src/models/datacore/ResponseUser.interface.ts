export interface IProfile {
    sigla: string;
    descricao: string;
}

export interface FetchUserResponse {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    descricao_status: string;
    telefone_formatado: string;
    perfis: IProfile[];
}