import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { ExtraClassActivitiesFilterDataModalProps } from './ExtraClassActivitiesFilterModal.interface';

export const ExtraClassActivitiesFilterDataModal: React.FC<ExtraClassActivitiesFilterDataModalProps> = ({filters, setFilters}) => {
    return (
        <React.Fragment>
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentName: value})} value={filters.studentName} />
            <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma/Período" onChange={(e:any) => setFilters({...filters, class: e.value})} options={[]} />
            <InputInLabel label="Atividade" onChange={(value) => setFilters({...filters, activity: value})} value={filters.activity} />
        </React.Fragment>
    )
};