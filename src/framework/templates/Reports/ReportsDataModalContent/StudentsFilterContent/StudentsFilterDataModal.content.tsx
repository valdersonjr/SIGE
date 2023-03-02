import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { StudentsFilterDataModalProps } from './StudentsFilterDataModal.interface';
import { yearOptions } from '~/utils/yerarOptions';

export const StudentsFilterDataModal: React.FC<StudentsFilterDataModalProps> = ({ filters, setFilters }) => {

    return(
        <React.Fragment>
            <InputSelectInLabel selectedValue={filters && filters.year ? filters.year : undefined} label="Ano" onChange={(e:any) => { setFilters({...filters, year: e.value}) }} options={yearOptions} />
            <InputSelectInLabel label="Turma" onChange={(e:any) => { setFilters({...filters, class: e.value}) }} options={[]} />
            <InputInLabel label="Aluno" value={filters.name} onChange={(e) => { setFilters({...filters, name: e}) }} />
        </React.Fragment>
    )
};
