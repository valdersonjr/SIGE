import React, { useEffect, useState } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import {Checkbox} from "@atoms";
import { yearOptions } from '~/utils/yerarOptions';
import { ImagePermissionsFilterDataModalProps } from './ImagePermissionsDataModal.interface';
import { getClassesApiService } from '~/service/api';

export const ImagePermissionsFilterDataModal: React.FC<ImagePermissionsFilterDataModalProps> = ({filters, setFilters}) => {
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
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
            <InputSelectInLabel label="Ano" selectedValue={filters.year} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" selectedValue={filters.class} onChange={(e:any) => setFilters({...filters, class: e.value})} options={classes ? classes : [{value: '', label: 'Selecione uma turma'}]} />
            <Checkbox label="Permitiram divulgação da imagem" checked={filters && filters.allowedImageDisclosure ? true : false} onChange={() => setFilters({...filters, allowedImageDisclosure: !filters.allowedImageDisclosure})} mt={10} />
        </React.Fragment>
    )
};
