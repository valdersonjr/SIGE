import { IFather, IMother } from "~/models/datacore";

export interface BillsReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    atividades: string;
    responsavel_financeiro: string;
    pai: IFather;
    mae: IMother;
    endereco: {
      id: number;
      entidade_id: number;
      tipo_entidade: string;
      rua: string;
      numero: number;
      complemento: string;
      bairro: string;
      cidade: {
        id: number;
        uf_id: number;
        cidade_ibge: number;
        descricao: string;
        uf: {
          id: number;
          uf_ibge: number;
          sigla: string;
          descricao: string;
          regiao: string;
        }
      };
      cep: string;
    }
}

export interface BillsReportTableProps {
    data: BillsReportTableDataType[];
}