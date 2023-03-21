import React, { useEffect } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BillsFilterDataModalContentProps } from './BillsFilterData.interface';
import { getClassesApiService } from '~/service/api';

export const BillsFilterDataModalContent: React.FC<BillsFilterDataModalContentProps> = ({filters, setFilters}) => {
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
            <InputSelectInLabel label="Ano" selectedValue={filters && filters.year ? filters.year : ''} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" selectedValue={filters && filters.class ? filters.class : ''} onChange={(e:any) => setFilters({...filters, class: e.value})} options={classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentName: value})} value={filters.studentName} />
        </React.Fragment>
    )
};
