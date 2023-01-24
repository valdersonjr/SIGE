export interface IProfile {
    sigla: string;
    descricao: string;
}

export interface FetchUserResponse {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    ativo?: boolean;
    descricao_status: string;
    telefone_formatado: string;
    perfis: IProfile[];
    senha?: string;
}