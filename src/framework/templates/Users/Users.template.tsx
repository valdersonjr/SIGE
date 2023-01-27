import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './Users.style';
import { Banner } from "@molecules";
import { FormUserQuery } from '~/framework/organisms';
import { UsersPageBannerIcon } from "@atoms/Icons/UsersPageBanner.icon";
import { UsersTable } from "@organisms/UsersTable/UsersTable.organism";
import { UsersProps } from './Users.interface';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import { ConfirmRemoveClassContent } from '../ViewClasses/ConfirmRemoveClassModalContent/ConfirmRemoveClassModal.content';
import { deleteUserApiService } from '~/service/api';


export const Users: React.FC<UsersProps> = ({users, reload, setReload}) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);


    const [filters, setFilters] = useState({
        name: "",
        profile: "",
        status: ""
    });
    
    useEffect(() => {
        if(canSave){
            deleteUserApiService(idToDelete).then((response:any) => {
                if(response.message){
                    alert(`Não foi possível excluir o usuário`);
                }
                else {
                    setReload && setReload(!reload);
                    setConfirmRemoveModal(!confirmRemoveModal);
                }
            });
            setCanSave(false);
        }
    },[canSave]);

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanSave={setCanSave} children={<ConfirmRemoveClassContent />} modalState={confirmRemoveModal} setModalState={setConfirmRemoveModal} />}
            <Banner Icon={<UsersPageBannerIcon />} type="users" title='Usuários' text="Veja os usuários vinculados a sua escola, edite, adicione!" buttonLabel="Novo Usuário" onButtonClick={() => navigate("/usuarios/novo-usuario")} />
            <FormUserQuery setFilters={setFilters} />
            <UsersTable data={users} filters={filters} reload={reload} setReload={setReload} confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal} setIdToDelete={setIdToDelete} />
        </S.Container>
    );
}
