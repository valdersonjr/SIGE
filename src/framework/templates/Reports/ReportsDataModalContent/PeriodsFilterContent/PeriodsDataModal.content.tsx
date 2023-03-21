import React, { useEffect } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { PeriodsFilterDataModalProps } from './PeriodsDataModal.interface';
import { getClassesApiService } from '~/service/api';

export const PeriodsFilterDataModal: React.FC<PeriodsFilterDataModalProps> = ({filters, setFilters}) => {
    const [classes, setClasses] = React.useState<{value: any, label: string}[]>();

    useEffect(() => {
        getClassesApiService().then(response => {
            let classesArray = [{value: '', label: 'Selecione uma turma'}];
            
            response.data.forEach((item: any) => {
                classesArray.push({value: item.id, label: `${item.descricao} - ${item.periodo_turma.descricao} (${item.periodo_turma.horario_entrada} às ${item.periodo_turma.horario_saida})`})
            });

            setClasses(classesArray);
        });
    }, []);

    console.log(filters);

    return(
        <React.Fragment>
            <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma/Período" onChange={(e:any) => setFilters({...filters, classNPeriod: e.value})} options={classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
        </React.Fragment>
    )
}
