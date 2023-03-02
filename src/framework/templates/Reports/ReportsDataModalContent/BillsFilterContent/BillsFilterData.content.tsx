import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BillsFilterDataModalContentProps } from './BillsFilterData.interface';

export const BillsFilterDataModalContent: React.FC<BillsFilterDataModalContentProps> = ({filters, setFilters}) => {
    return (
        <React.Fragment>
            <InputSelectInLabel label="Ano" selectedValue={filters && filters.year ? filters.year : ''} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" selectedValue={filters && filters.class ? filters.class : ''} onChange={(e:any) => setFilters({...filters, class: e.value})} options={[]} />
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentName: value})} value={filters.studentName} />
        </React.Fragment>
    )
};
