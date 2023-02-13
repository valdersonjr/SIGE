import React, { useEffect, useState } from 'react';

import * as S from './ViewActivities.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {ActivitiesTable} from "@organisms/ActivitiesTable/ActivitiesTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewActivitiesProps} from "@templates/ViewActivities/ViewActivities.interface";
import { statusData } from './ViewActivities.logic';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import { ConfirmRemoveClassContent } from '../ViewClasses/ConfirmRemoveClassModalContent/ConfirmRemoveClassModal.content';
import { deleteActivityApiService } from '~/service/api';
import {Loading} from "@organisms/Loading/Loading.organism";

export const ViewActivities: React.FC<ViewActivitiesProps> = ({activities, setReload, reload, filters, handleFilterChange, clearFilters, loading}) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canSave) {
            deleteActivityApiService(idToDelete)
                .then((response:any) => {
                    if (response.message) alert("Não foi possível excluir a atividade");
                    else {
                        setReload && setReload(!reload);
                        setConfirmRemoveModal(!confirmRemoveModal);
                    }
                }).catch(err => console.error(err));
            setCanSave(false);
        }
    },[canSave]);

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanSave={setCanSave}
                                                      children={<ConfirmRemoveClassContent />}
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
