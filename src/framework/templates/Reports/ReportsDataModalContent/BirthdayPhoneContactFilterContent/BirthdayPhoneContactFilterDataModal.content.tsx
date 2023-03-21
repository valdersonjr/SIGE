import React, { useEffect } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import { yearOptions } from '~/utils/yerarOptions';
import { BirthdayPhoneContactFilterDataModalProps } from './BirthdayPhoneContactFilterDataModal.interface';
import { getClassesApiService } from '~/service/api';

export const BirthdayPhoneContactFilterDataModal: React.FC<BirthdayPhoneContactFilterDataModalProps> = ({filters, setFilters}) => {
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
            <InputSelectInLabel label="Ano" onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" onChange={(e:any) => setFilters({...filters, class: e.value})} options={classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
            <InputInLabel label="Pai" onChange={(value) => setFilters({...filters, fathersName: value})} value={filters.fathersName} />
            <InputInLabel label="Mãe" onChange={(value) => setFilters({...filters, mothersName: value})} value={filters.mothersName} />
        </React.Fragment>
    )
}