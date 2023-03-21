import React, { useEffect } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { StudentsFilterDataModalProps } from './StudentsFilterDataModal.interface';
import { yearOptions } from '~/utils/yerarOptions';
import { getClassesApiService } from '~/service/api';

export const StudentsFilterDataModal: React.FC<StudentsFilterDataModalProps> = ({ filters, setFilters }) => {
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
            <InputSelectInLabel selectedValue={filters && filters.year ? filters.year : undefined} label="Ano" onChange={(e:any) => { setFilters({...filters, year: e.value}) }} options={yearOptions} />
            <InputSelectInLabel label="Turma" onChange={(e:any) => { setFilters({...filters, class: e.value}) }} options={ classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <InputInLabel label="Aluno" value={filters.name} onChange={(e) => { setFilters({...filters, name: e}) }} />
        </React.Fragment>
    )
};
