import React, { useEffect, useState } from 'react';

import * as S from './ViewActivities.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {ActivitiesTable} from "@organisms/ActivitiesTable/ActivitiesTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewActivitiesProps} from "@templates/ViewActivities/ViewActivities.interface";
import { statusData } from './ViewActivities.logic';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import { deleteActivityApiService } from '~/service/api';
import {Loading} from "@organisms/Loading/Loading.organism";
import {toast} from "react-toastify";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";

export const ViewActivities: React.FC<ViewActivitiesProps> = ({activities, setReload, reload, filters, handleFilterChange, clearFilters, loading}) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canDelete) {
            toast.promise(
                () => deleteActivity(),
                {
                    pending: 'Carregando...',
                    success: 'Atividade deletada com sucesso!',
                    error: 'Falha ao tentar deletar atividade!'
                }
            ).then(() => {
                setReload(!reload);
                setConfirmRemoveModal(false);
                setCanDelete(false);
            }).catch(err => toast.error('toast error:', err));
        }
    },[canDelete]);

    const deleteActivity = () => new Promise((resolve, reject) => {
        deleteActivityApiService(idToDelete)
            .then((response: any) => {
                if (!!response?.message) return reject("error removing activity");

                resolve(true);
            }).catch(err => reject(err));
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanDelete={setCanDelete}
                                                      children={<ConfirmRemoveContent
                                                          title="Atenção!"
                                                          description="Tem certeza que deseja deletar essa atividade?" />}
                                                      modalState={confirmRemoveModal}
                                                      setModalState={setConfirmRemoveModal} />}

            <Header title="Atividades" buttonText="Cadastrar Nova Atividade" onButtonClick={() => navigate('/gestao-escolar/nova-atividade')} />
            {!loading ? (
                <React.Fragment>
                    <S.FindClassContainer>
                        <Title size={20}>Encontre a atividade</Title>
                        <S.FilterContainer>
                            <InputInLabel label="Atividade" value={filters.descricao} onChange={v => handleFilterChange('descricao', v)} />
                            <SelectInLabel label="Situação" options={statusData} selectedValue={filters.situacao}  onChange={(v: any) => handleFilterChange('situacao', v?.value)} />
                            <S.ClearButton>
                                <Button label="Limpar filtro" type="reset" justifyText="center"
                                        onClick={clearFilters} variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                            </S.ClearButton>
                        </S.FilterContainer>
                    </S.FindClassContainer>
                    <ActivitiesTable data={activities} reload={reload} setReload={setReload}
                                     confirmRemoveModal={confirmRemoveModal}
                                     setConfirmRemoveModal={setConfirmRemoveModal}
                                     setIdToDelete={setIdToDelete} />
                </React.Fragment>
            ) : <Loading />}
        </S.Container>
    );
};
