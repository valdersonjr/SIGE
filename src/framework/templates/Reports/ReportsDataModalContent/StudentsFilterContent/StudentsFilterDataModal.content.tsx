import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearFilterData } from './StudentsFilterDataModal.logic';
import { StudentsFilterDataModalProps } from './StudentsFilterDataModal.interface';

export const StudentsFilterDataModal: React.FC<StudentsFilterDataModalProps> = ({ filters, setFilters }) => {

    return(
        <React.Fragment>
            <InputInLabel label="Aluno" value={filters.name} onChange={(e) => { setFilters({...filters, name: e}) }} />
            <InputSelectInLabel selectedValue={filters && filters.year ? filters.year : undefined} label="Ano" onChange={(e:any) => { setFilters({...filters, year: e.value}) }} options={yearFilterData} />
            <InputSelectInLabel label="Turma" onChange={(e:any) => { setFilters({...filters, class: e.value}) }} options={[]} />
        </React.Fragment>
    )
};
