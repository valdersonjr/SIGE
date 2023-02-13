import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import {Header} from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";
import { ViewClassesProps } from "./ViewClasses.interface";
import * as S from './ViewClasses.style';
import {deleteClassApiService} from "@service/api";
import ConfirmRemoveData from "@organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism";
import {
    ConfirmRemoveClassContent
} from "@templates/ViewClasses/ConfirmRemoveClassModalContent/ConfirmRemoveClassModal.content";
import {statusData} from "@templates/ViewActivities/ViewActivities.logic";
import {Loading} from "@organisms/Loading/Loading.organism";

export const ViewClasses: React.FC<ViewClassesProps> = ({ classes, reload, setReload, filters, clearFilters, handleFilterChange, loading, classesOptions }) => {
    const navigate = useNavigate();

    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canSave) {
            deleteClassApiService(idToDelete)
                .then(() => {
                    setReload(!reload);
                    setConfirmRemoveModal(!confirmRemoveModal);
                }).catch(error => console.error(error));
            setCanSave(false);
        }
    }, [canSave]);

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title="Confirmar Deleção" children={<ConfirmRemoveClassContent />}
                                                      setCanSave={setCanSave}
                                                      setModalState={setConfirmRemoveModal} modalState={confirmRemoveModal}
            />}

            <Header title="Turmas" buttonText="Cadastrar Nova Turma" onButtonClick={() => navigate('/gestao-escolar/nova-turma')} />
            {!loading ? (
                <React.Fragment>
                    <S.FindClassContainer>
                        <Title size={20}>Encontre sua turma</Title>
                        <S.FilterContainer>
                            <SelectInLabel selectedValue={filters.turma} onChange={(v: any) => handleFilterChange('turma', v?.value)} options={classesOptions} label="Turma" />
                            <SelectInLabel selectedValue={filters.situacao} onChange={(v: any) => handleFilterChange('situacao', v?.value)} options={statusData} label="Situação" />
                            <S.ClearButton>
                                <Button onClick={clearFilters} label="Limpar" type="reset"
                                        justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                            </S.ClearButton>
                        </S.FilterContainer>
                    </S.FindClassContainer>
                    <ClassesTable data={classes} reload={reload} setReload={setReload}
                                  confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal}
                                  setIdToDelete={setIdToDelete} />
                </React.Fragment>
            ) : <Loading />}
        </S.Container>
    );
};
