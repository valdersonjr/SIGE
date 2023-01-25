import React, {useEffect, useState} from 'react';
import {InputInLabel} from "@molecules";
import {
    EditActivityDataModalProps
} from "@templates/ViewActivity/EditActivityDataModalContent/EditActivityDataModal.interface";

export const EditActivityDataModal: React.FC<EditActivityDataModalProps> = ({data, setData}) => {
    const [descricao, setDescricao] = useState(data?.descricao);

    useEffect(() => {
        if (descricao.trim().length > 0) {
            setData({...data, descricao});
        }
    }, [descricao]);

    return (
        <React.Fragment>
            <InputInLabel label="Atividade" onChange={setDescricao} value={descricao} />
        </React.Fragment>
    );
}
