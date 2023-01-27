import React, { useEffect, useState } from 'react';

import { Banner } from '~/framework/molecules';
import { StudentTable } from '~/framework/organisms';
import { FormStudentQuery } from '~/framework/organisms';
import { StudentsPageBanner } from '~/framework/atoms/Icons';

// import { StudentsProps } from './Students.interface';

import { useNavigate } from 'react-router-dom';

import { StudentsProps } from './Students.interface';
import * as S from './Students.style';
import { deleteStudentApiService } from '~/service/api';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import { ConfirmRemoveClassContent } from '../ViewClasses/ConfirmRemoveClassModalContent/ConfirmRemoveClassModal.content';

export const Students: React.FC<StudentsProps> = ({ students, reload, setReload }) => {
    const navigate = useNavigate();

    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if(canSave){
            deleteStudentApiService(idToDelete).then((response:any) => {
                if(response.message){
                    alert(`Não foi possível excluir ${name}`);
                }
                else {
                    setConfirmRemoveModal(!confirmRemoveModal);
                    setReload && setReload(!reload);
                }
            })
        }
    },[canSave]);

    const [tableFilters, setTableFilters] = useState({
        name: "",
        year: 2022,
        period: "",
        class: "",
        status: ""
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanSave={setCanSave} children={<ConfirmRemoveClassContent />} modalState={confirmRemoveModal} setModalState={setConfirmRemoveModal} />}
            <Banner Icon={<StudentsPageBanner />} type="students" title='Área de Alunos' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. Caso desejar, cadastre um novo aluno cliquando ao lado." buttonLabel="Novo Aluno" onButtonClick={() => navigate("/alunos/novo-aluno")} />
            <FormStudentQuery filters={tableFilters} setFilters={setTableFilters} />
            <StudentTable data={students} filters={tableFilters} reload={reload} setReload={setReload} confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal} setIdToDelete={setIdToDelete} />
        </S.Container>
    )
}
