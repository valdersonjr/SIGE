export interface ExtraClassActivitiesDataType {
    matricula_id: number;
      ano: string;
      turma_id: number;
      turma_descricao: string;
      aluno_id: number;
      aluno_nome: string;
      atividades: string;
}

export interface ExtraClassActivitiesProps {
    data: ExtraClassActivitiesDataType[];
}