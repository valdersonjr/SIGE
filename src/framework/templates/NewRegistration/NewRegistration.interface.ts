import React from "react";

export interface createRegistrationDataProps {
    turma_id: number;
    aluno_id: number;
    ano: number;
    divulgacao_dados_autorizada: boolean;
    divulgacao_imagem_rede: boolean;
    valor_matricula: number;
    valor_mensalidade: number;
    valor_refeicao: number;
    valor_hora_extra: number;
    valor_projeto_nutricional: number;
    valor_material_didatico: number;
    valor_material_pedagogico: number;
    forma_pagamento_parcelas: string;
    data_inicio: string;
    optou_almoco: boolean;
    optou_jantar: boolean;
    atividades: number[];
}

export interface NewRegistrationProps {
    handleSubmit?: (event: React.SyntheticEvent, data: any) => void;
}
