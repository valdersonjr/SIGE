import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as S from './Users.style';
import {Banner, InputInLabel} from "@molecules";
import {UsersPageBannerIcon} from "@atoms/Icons/UsersPageBanner.icon";
import {UsersTable} from "@organisms/UsersTable/UsersTable.organism";
import {UsersProps} from './Users.interface';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import {deleteUserApiService} from '~/service/api';
import {Loading} from "@organisms/Loading/Loading.organism";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";
import {toast} from "react-toastify";
import {Button, Title, VariantButtonEnum} from "@atoms";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import {profileOptions} from "@organisms/Forms/FormUserQuery/FormUserQuery.logic";
import {statusData} from "@templates/ViewActivities/ViewActivities.logic";
import {booleanify} from "~/utils/booleanify";

export const Users: React.FC<UsersProps> = ({
                                                users,
                                                reload,
                                                setReload,
                                                loading,
                                                setFiltersLoading,
                                                filtersLoading,
                                                filters,
                                                clearFilters,
                                                handleFilterChange,
                                            }) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canDelete) {
            toast.promise(
                () => deleteUser(),
                {
                    pending: 'Carregando...',
                    success: 'Usuário deletado com sucesso!',
                    error: 'Falha ao tentar deletar usuário!'
                }
            ).then(() => {
                setReload(!reload);
                setConfirmRemoveModal(false);
                setCanDelete(false);
            }).catch(err => toast.error(err));
        }
    }, [canDelete]);

    const deleteUser = () => new Promise((resolve, reject) => {
        deleteUserApiService(idToDelete)
            .then((res: any) => {
                if (!!res?.message) return reject(res?.message);

                resolve(true);
            }).catch(err => toast.error(err));
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanDelete={setCanDelete}
                                                      children={<ConfirmRemoveContent title="Atenção!"
                                                                                      description="Tem certeza que deseja deletar esse usuário?"/>}
                                                      modalState={confirmRemoveModal}
                                                      setModalState={setConfirmRemoveModal}/>}
            <Banner Icon={<UsersPageBannerIcon/>} type="users" title='Usuários'
                    text="Veja os usuários vinculados a sua escola, edite, adicione!" buttonLabel="Novo Usuário"
                    onButtonClick={() => navigate("/usuarios/novo-usuario")}/>
            {!loading ? (
                <React.Fragment>
                    <S.FindUserContainer>
                        <Title size={20}>Encontra o usuário</Title>
                        <S.InputContainer>
                            <InputInLabel label="Nome" value={filters.nome} placeholder="Digite aqui..."
                                          onChange={v => handleFilterChange("nome", v)}/>
                            <InputSelectInLabel label="Perfil" selectedValue={filters.perfil}
                                                onChange={(v: any) => handleFilterChange("perfil", v?.value)}
                                                options={profileOptions}/>
                            <InputSelectInLabel label="Situação" options={statusData}
                                                onChange={(v: any) => handleFilterChange('situacao', booleanify(v?.value))}/>
                            <S.ClearButton>
                                <Button label="Limpar" type="reset" justifyText="center"
                                        onClick={clearFilters} variant={VariantButtonEnum.PRIMARY_TRANSPARENT}/>
                            </S.ClearButton>
                        </S.InputContainer>
                    </S.FindUserContainer>
                    <UsersTable data={users} reload={reload} setReload={setReload}
                                setFiltersLoading={setFiltersLoading} filtersLoading={filtersLoading}
                                confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal}
                                setIdToDelete={setIdToDelete}/>
                </React.Fragment>
            ) : <Loading/>}
        </S.Container>
    );
}
