import React from 'react';

export interface createClassDataProps {
    periodo: number;
    ensino: string;
    descricao: string;
    mensalidade: number;
    refeicao: number;
    horaExtra: number;
    nutricional: number;
    didatico: number;
    pedagogico: number;
}

export interface NewClassProps {
    handleSubmit: (event: React.SyntheticEvent, data: createClassDataProps) => void;
}
