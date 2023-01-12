import React from 'react';
import { NewClass } from "@templates/NewClass/NewClass.template";
import { educationDataProps, finantialDataProps } from '~/framework/templates/NewClass/NewClass.interface';
import { createClassApiService } from '~/service/api';
import { useNavigate } from 'react-router-dom';

const NewClassPage: React.FC = () => {
    const navigate = useNavigate();

    const handleClassCreation = async (e: React.SyntheticEvent, educationData: educationDataProps, finantialData: finantialDataProps) => {
        if (educationData.education === "") {
            alert("Selecione o tipo de ensino da turma!");
        }
        else if (educationData.name === "") {
            alert("Entre com um nome de turma válido!");
        }
        else if (Number(educationData.period) === -1) {
            alert("Entre com um período válido!");
        }
        else {
            await createClassApiService(educationData, finantialData)
                .then(response => {
                    console.log(response);
                    navigate(-1);
                })
                .catch(error => console.log(error));
        }
    }

    return <NewClass handleSubmit={handleClassCreation} />
}

export default NewClassPage;
