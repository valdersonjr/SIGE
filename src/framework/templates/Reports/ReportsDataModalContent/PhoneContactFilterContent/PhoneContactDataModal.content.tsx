import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { PhoneContactFilterDataModalProps } from './PhoneContactDataModal.interface';

export const PhoneContactFilterDataModal: React.FC<PhoneContactFilterDataModalProps> = ({filters, setFilters}) => (
    <React.Fragment>
        <InputSelectInLabel label="Ano" selectedValue={filters && filters.year ? filters.year : ''} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
        <InputSelectInLabel label="Turma" onChange={(e:any) => setFilters({...filters, class: e.value})} options={[]} />
        <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentName: value})} value={filters.studentName} />
        <InputInLabel label="Mãe"  onChange={(value) => setFilters({...filters, mothersName: value})} value={filters.mothersName} />
        <InputInLabel label="Pai"  onChange={(value) => setFilters({...filters, fathersName: value})} value={filters.fathersName} />
    </React.Fragment>
);
