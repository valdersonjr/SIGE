import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

export const StudentsFilterDataModal: React.FC = () => (
    <React.Fragment>
        <InputInLabel label="Aluno" onChange={() => {}} value="Junin" />
        <InputSelectInLabel label="Ano" onChange={() => {}}
                            options={[{value: '2020', label: '2020'}, {value: '2021', label: '2021'}]}
        />
        <InputSelectInLabel label="Turma" onChange={() => {}}
                            options={[{value: '2°A', label: '2°A'}, {value: '2°B', label: '2°B'}]}
        />
    </React.Fragment>
);
