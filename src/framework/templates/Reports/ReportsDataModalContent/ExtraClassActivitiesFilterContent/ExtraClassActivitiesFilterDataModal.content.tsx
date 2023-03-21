import React, { useEffect } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { ExtraClassActivitiesFilterDataModalProps } from './ExtraClassActivitiesFilterModal.interface';
import { getClassesApiService } from '~/service/api';

export const ExtraClassActivitiesFilterDataModal: React.FC<ExtraClassActivitiesFilterDataModalProps> = ({filters, setFilters}) => {
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

    return (
        <React.Fragment>
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentName: value})} value={filters.studentName} />
            <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma/Período" onChange={(e:any) => setFilters({...filters, class: e.value})} options={classes ?  classes : [{value: '', label: 'Selecione uma turma'}]} />
            <InputInLabel label="Atividade" onChange={(value) => setFilters({...filters, activity: value})} value={filters.activity} />
        </React.Fragment>
    )
};