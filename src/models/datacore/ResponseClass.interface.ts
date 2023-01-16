export interface ResponseClass {
    id: number;
    periodo_turma_id: number;
    periodo_turma_descricao: string;
    ensino: string;
    horario: string;
    descricao: string;
    valor_mensalidade: number;
    valor_refeicao: number;
    valor_hora_extra: number;
    valor_projeto_nutricional: number;
    valor_material_didatico: number;
    valor_material_pedagogico: number;
    ativo: boolean;
}