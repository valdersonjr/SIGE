import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { PeriodsFilterDataModalProps } from './PeriodsDataModal.interface';

export const PeriodsFilterDataModal: React.FC<PeriodsFilterDataModalProps> = ({filters, setFilters}) => (
    <React.Fragment>
        <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
        <InputSelectInLabel label="Turma/Período" onChange={(e:any) => setFilters({...filters, classNPeriod: e.value})} options={[]} />
        <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
    </React.Fragment>
);
