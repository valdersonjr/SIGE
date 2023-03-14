import React, {useState} from 'react';
import * as S from "./ViewActivity.style";
import ViewActivity from "@templates/ViewActivity/ViewActivity.template";
import {useParams} from "react-router-dom";
import {updateActivityApiService} from "@service/api";
import {toast} from "react-toastify";

const ViewActivityPage: React.FC = () => {
    const { id } = useParams();

    const [activityRegistrationModalState, setActivityRegistrationModalState] = useState(false);
    const [reload, setReload] = useState(false);

    const save = (data: any) => {
        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Atividade salva com sucesso!',
                error: 'Falha ao tentar salvar atividade!'
            }
        ).then(() => setReload(!reload)).catch(err => toast.error(err));
    }

    const handleSave = (data: any) => new Promise((resolve, reject) => {
        if (data?.descricao?.trim()?.length <= 0) return reject("error saving a activity");

        updateActivityApiService(data?.id, {...data})
            .then((response: any) => {
                if (!!response?.message) return reject("error saving a activity");

                if (activityRegistrationModalState && !!setActivityRegistrationModalState) {
                    setActivityRegistrationModalState(!activityRegistrationModalState);
                }

                resolve(true);
            }).catch(err => reject(err));
    });

    return (
        <S.Container>
            <ViewActivity activityId={Number(id)} activityRegistrationModalState={activityRegistrationModalState}
                setActivityRegistrationModalState={setActivityRegistrationModalState} handleSubmit={save}
                reload={reload} setReload={setReload} />
        </S.Container>
    );
}

export default ViewActivityPage;
