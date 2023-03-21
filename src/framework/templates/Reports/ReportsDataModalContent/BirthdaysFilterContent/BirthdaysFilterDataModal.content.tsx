import React, { useEffect } from 'react';

import * as S from './BirthdaysFilterDataModal.style';
import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BirthdaysFilterDataModalProps } from './BirthdaysFilterDataModal.interface';
import { getClassesApiService } from '~/service/api';

export const BirthdaysFilterDataModal: React.FC<BirthdaysFilterDataModalProps> = ({filters, setFilters}) => {
    const [classes, setClasses] = React.useState<{value: any, label: string}[]>();

    useEffect(() => {
        getClassesApiService().then(response => {
            let classesArray = [{value: '', label: 'Selecione uma turma'}];
             
            response.data.forEach((item: any) => {
                classesArray.push({value: item.descricao, label: item.descricao})
            });

            setClasses(classesArray);
        });
    }, []);

    return(
        <React.Fragment>
            <InputSelectInLabel label="Ano" selectedValue={filters && filters.year ? filters.year : ''} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" selectedValue={filters && filters.class ? filters.class : ''} onChange={(e:any) => setFilters({...filters, class: e.value})} options={classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <S.Row>
                <InputInLabel type='date' label="Data de Início" value={filters.initialDate} onChange={(value) => setFilters({ ...filters, initialDate: value })} />
                <InputInLabel type='date' label="Data Fim" value={filters.finalDate} onChange={(value) => setFilters({ ...filters, finalDate: value })} />
            </S.Row>
            <InputSelectInLabel label="Aniversário de" selectedValue={filters && filters.registerType ? filters.registerType : ''} onChange={(e:any) => setFilters({...filters, registerType: e.value})} options={[{value: '', label: 'Selecione uma opção'}, {value: 'mae', label: 'Mães'}, {value: 'pai', label: 'Pais'}, {value: 'aluno', label: 'Alunos'}]} />
        </React.Fragment>
    )
}
