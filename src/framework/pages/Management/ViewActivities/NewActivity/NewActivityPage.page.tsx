import React, { useState } from 'react';
import {NewActivity} from "@templates/NewActivity/NewActivity.template";
import { createActivityApiService } from '~/service/api/activity.service';
import { useNavigate } from 'react-router-dom';

const NewActivityPage: React.FC = () => {
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleActivityCreation = async (event:React.SyntheticEvent) => {
        event.preventDefault();

        await createActivityApiService(description)
            .then(() => {
                navigate("/gestao-escolar/visualizar-atividades");
        });
    }

    return <NewActivity description={description} setDescription={setDescription} onSubmit={handleActivityCreation} />
}

export default NewActivityPage;
