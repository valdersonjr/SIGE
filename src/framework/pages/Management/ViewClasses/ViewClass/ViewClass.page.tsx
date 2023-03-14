import React, {useState} from "react";
import { useParams } from "react-router-dom";
import ViewClass from "~/framework/templates/ViewClass/ViewClass.template";
import * as S from './ViewClass.style';
import {putClassApiService} from "@service/api";
import {toast} from "react-toastify";

const ViewClassPage: React.FC = () => {
    const { id } = useParams();

    const [registrationModalState, setRegistrationModalState] = useState(false);
    const [financeModalState, setFinanceModalState] = useState(false);
    const [reload, setReload] = useState(false);

    const save = async (data: any) => {
        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Turma salva com sucesso!',
                error: 'Falha ao tentar salvar turma!'
            }
        ).then(() => {
            setRegistrationModalState(false);
            setFinanceModalState(false);
            setReload(!reload);
        }).catch(err => toast.error(err));
    }

    const handleSave = (data: any) => new Promise((resolve, reject) => {
        putClassApiService(data?.id, data)
            .then((response: any) => {
                if (!!response?.message) return reject("error saving a class");

                resolve(true);
            }).catch(err => console.error(err));
    });

    return (
        <S.Container>
            <ViewClass classId={Number(id)} reload={reload} setReload={setReload} handleSubmit={save}
                       financeModalState={financeModalState} setFinanceModalState={setFinanceModalState}
                       registrationModalState={registrationModalState} setRegistrationModalState={setRegistrationModalState} />
        </S.Container>
    )
}

export default ViewClassPage;
