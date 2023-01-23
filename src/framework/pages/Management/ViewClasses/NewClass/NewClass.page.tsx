import React from 'react';
import { NewClass } from "@templates/NewClass/NewClass.template";
import {
    createClassDataProps
} from '~/framework/templates/NewClass/NewClass.interface';
import { createClassApiService } from '~/service/api';
import { useNavigate } from 'react-router-dom';

const NewClassPage: React.FC = () => {
    const navigate = useNavigate();

    const handleClassCreation = async (_e: React.SyntheticEvent, data: createClassDataProps) => {
        if (data.ensino === "") {
            alert("Selecione o tipo de ensino da turma!");
        }
        else if (data.descricao === "") {
            alert("Entre com um nome de turma válido!");
        }
        else if (data.periodo === -1) {
            alert("Entre com um período válido!");
        }
        else {
            await createClassApiService(data)
                .then(() => {
                    navigate(-1);
                })
                .catch(error => console.error(error));
        }
    }

    return <NewClass handleSubmit={handleClassCreation} />
}

export default NewClassPage;
