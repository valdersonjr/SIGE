import React, {useState} from 'react';

import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import {Checkbox} from "@atoms";

export const ImagePermissionsFilterDataModal: React.FC = () => {
    const [imageAllowedCheck, setImageAllowedCheck] = useState(false);

    return (
        <React.Fragment>
            <InputInLabel label="Aluno" onChange={() => console.log("student name")} value="Junin" />
            <InputSelectInLabel label="Ano" onChange={() => console.log('year')}
                options={[{value: '2020', label: '2020'}, {value: '2021', label: '2021'}]}
            />
            <InputSelectInLabel label="Turma/Período" onChange={() => console.log('class')}
                options={[{value: '2°A', label: '2°A'}, {value: '2°B', label: '2°B'}]}
            />
            <Checkbox label="Permitiram divulgação da imagem" checked={imageAllowedCheck}
                onChange={() => setImageAllowedCheck(!imageAllowedCheck)} mt={10} />
        </React.Fragment>
    )
};
