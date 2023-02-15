import React, {useEffect, useState} from 'react';
import {Banner} from '~/framework/molecules';
import {StudentTable} from '~/framework/organisms';
import {FormStudentQuery} from '~/framework/organisms';
import {StudentsPageBanner} from '~/framework/atoms/Icons';
import {useNavigate} from 'react-router-dom';
import {StudentsProps} from './Students.interface';
import * as S from './Students.style';
import {deleteStudentApiService} from '~/service/api';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import {Loading} from "@organisms/Loading/Loading.organism";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";
import {toast} from "react-toastify";

export const Students: React.FC<StudentsProps> = ({students, reload, setReload, loading}) => {
    const navigate = useNavigate();

    const [tableFilters, setTableFilters] = useState({
        name: "",
        year: 2022,
        period: "",
        class: "",
        status: ""
    });
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canDelete) {
            toast.promise(
                () => deleteStudent(),
                {
                    pending: 'Carregando...',
                    success: 'Aluno deletado com sucesso!',
                    error: 'Falha ao tentar deletar aluno!'
                }
            ).then(() => {
                setConfirmRemoveModal(false);
                setReload(!reload);
                setCanDelete(false);
            }).catch(err => toast.error('toast error:', err));
        }
    }, [canDelete]);

    const deleteStudent = () => new Promise((resolve, reject) => {
        deleteStudentApiService(idToDelete).then((response: any) => {
            if (!!response?.message) return reject("error removing student");

            resolve(true);
        }).catch(err => reject(err));
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanDelete={setCanDelete}
                                                      children={<ConfirmRemoveContent
                                                          title="Atenção!"
                                                          description="Tem certeza que deseja deletar esse aluno?"/>}
                                                      modalState={confirmRemoveModal}
                                                      setModalState={setConfirmRemoveModal}/>}
            <Banner Icon={<StudentsPageBanner/>} type="students" title='Área de Alunos'
                    text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. Caso desejar, cadastre um novo aluno cliquando ao lado."
                    buttonLabel="Novo Aluno" onButtonClick={() => navigate("/alunos/novo-aluno")}/>
            {!loading ? (
                <React.Fragment>
                    <FormStudentQuery filters={tableFilters} setFilters={setTableFilters}/>
                    <StudentTable data={students} filters={tableFilters} reload={reload}
                                  setReload={setReload} confirmRemoveModal={confirmRemoveModal}
                                  setConfirmRemoveModal={setConfirmRemoveModal} setIdToDelete={setIdToDelete}/>
                </React.Fragment>
            ) : <Loading/>}
        </S.Container>
    )
}
