import React, { useEffect, useState } from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import {Checkbox} from "@atoms";
import { yearOptions } from '~/utils/yerarOptions';
import { ImagePermissionsFilterDataModalProps } from './ImagePermissionsDataModal.interface';
import { getPeriodsApiService } from '~/service/api';

export const ImagePermissionsFilterDataModal: React.FC<ImagePermissionsFilterDataModalProps> = ({filters, setFilters}) => {
    const [classesOptions, setClassesOptions] = useState<{value:string; label:string}[]>([{label:'teste', value: 'teste'}]);

    useEffect(() => {
        getPeriodsApiService().then(response => {
            console.log(response.data);
            let classesArray:{value:string; label:string}[] = [{label: 'Selecione uma turma', value: ''}];
           response.data.forEach(element => classesArray.push({label: element.descricao, value: element.descricao}));
           setClassesOptions(classesArray);
        });
    }, []);

    return (
        <React.Fragment>
            <InputInLabel label="Aluno" onChange={(value) => setFilters({...filters, studentsName: value})} value={filters.studentsName} />
            <InputSelectInLabel label="Ano" selectedValue={filters.year} onChange={(e:any) => setFilters({...filters, year: e.value})} options={yearOptions} />
            <InputSelectInLabel label="Turma" selectedValue={filters.class} onChange={(e:any) => setFilters({...filters, class: e.value})} options={classesOptions} />
            <Checkbox label="Permitiram divulgação da imagem" checked={filters && filters.allowedImageDisclosure ? true : false} onChange={() => setFilters({...filters, allowedImageDisclosure: !filters.allowedImageDisclosure})} mt={10} />
        </React.Fragment>
    )
};
