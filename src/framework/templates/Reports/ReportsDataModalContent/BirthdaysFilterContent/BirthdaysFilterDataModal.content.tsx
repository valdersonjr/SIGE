import React, { useEffect } from 'react';

import * as S from './BirthdaysFilterDataModal.style';
import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BirthdaysFilterDataModalProps } from './BirthdaysFilterDataModal.interface';

export const BirthdaysFilterDataModal: React.FC<BirthdaysFilterDataModalProps> = ({filters, setFilters}) => (
    <React.Fragment>
        <InputSelectInLabel label="Ano" selectedValue={filters && filters.year ? filters.year : ''} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
        <InputSelectInLabel label="Turma" selectedValue={filters && filters.class ? filters.class : ''} onChange={(e:any) => setFilters({...filters, class: e.value})} options={[]} />
        <S.Row>
            <InputInLabel type='date' label="Data de Início" value={filters.initialDate} onChange={(value) => setFilters({ ...filters, initialDate: value })} />
            <InputInLabel type='date' label="Data Fim" value={filters.finalDate} onChange={(value) => setFilters({ ...filters, finalDate: value })} />
        </S.Row>
        <InputSelectInLabel label="Aniversário de" selectedValue={filters && filters.registerType ? filters.registerType : ''} onChange={(e:any) => setFilters({...filters, registerType: e.value})} options={[{value: '', label: 'Selecione uma opção'}, {value: 'mae', label: 'Mães'}, {value: 'pai', label: 'Pais'}, {value: 'aluno', label: 'Alunos'}]} />
    </React.Fragment>
);
