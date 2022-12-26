import React from 'react';

import * as S from './BirthdaysFilterDataModal.style';
import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

export const BirthdaysFilterDataModal: React.FC = () => (
    <React.Fragment>
        <InputInLabel label="Aluno" onChange={() => console.log("student name")} value="Junin" />
        <InputSelectInLabel label="Ano" onChange={() => console.log('year')}
                            options={[{value: '2020', label: '2020'}, {value: '2021', label: '2021'}]}
        />
        <InputSelectInLabel label="Turma" onChange={() => console.log('class')}
                            options={[{value: '2°A', label: '2°A'}, {value: '2°B', label: '2°B'}]}
        />
        <S.Row>
            <InputSelectInLabel label="Data de Início" onChange={() => console.log('class')}
                                options={[]}
            />
            <InputSelectInLabel label="Data de Fim" onChange={() => console.log('class')}
                                options={[]}
            />
        </S.Row>
        <InputSelectInLabel label="Aniversário de" onChange={() => console.log('class')}
                            options={[{value: 'Mães', label: 'Mães'}, {value: 'Pais', label: 'Pais'}, {value: 'Alunos', label: 'Alunos'}]}
        />
    </React.Fragment>
);
