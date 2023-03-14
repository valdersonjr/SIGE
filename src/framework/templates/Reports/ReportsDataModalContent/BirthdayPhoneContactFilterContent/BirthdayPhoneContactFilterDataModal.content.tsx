import React from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BirthdayPhoneContactFilterDataModalProps } from './BirthdayPhoneContactFilterDataModal.interface';

export const BirthdayPhoneContactFilterDataModal: React.FC<BirthdayPhoneContactFilterDataModalProps> = ({filters, setFilters}) => (
    <React.Fragment>
        <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
        <InputSelectInLabel label="Turma" onChange={(e:any) => setFilters({...filters, class: e.value})} options={[]} />
        <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
        <InputInLabel label="Pai" onChange={(value) => setFilters({...filters, fathersName: value})} value={filters.fathersName} />
        <InputInLabel label="Mãe" onChange={(value) => setFilters({...filters, mothersName: value})} value={filters.mothersName} />
    </React.Fragment>
);
