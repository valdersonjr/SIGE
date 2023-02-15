import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "~/framework/atoms";
import {Header} from "~/framework/molecules";
import {ClassesTable} from "~/framework/organisms";
import {ViewClassesProps} from "./ViewClasses.interface";
import * as S from './ViewClasses.style';
import {deleteClassApiService} from "@service/api";
import ConfirmRemoveData from "@organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism";
import {statusData} from "@templates/ViewActivities/ViewActivities.logic";
import {Loading} from "@organisms/Loading/Loading.organism";
import {toast} from "react-toastify";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";

export const ViewClasses: React.FC<ViewClassesProps> = ({
                                                            classes,
                                                            reload,
                                                            setReload,
                                                            filters,
                                                            clearFilters,
                                                            handleFilterChange,
                                                            loading,
                                                            classesOptions
                                                        }) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canDelete) {
            toast.promise(
                () => deleteClass(),
                {
                    pending: 'Carregando...',
                    success: 'Turma deletada com sucesso!',
                    error: 'Falha ao tentar deletar turma!'
                }
            ).then(() => {
                setReload(!reload);
                setConfirmRemoveModal(false);
                setCanDelete(false);
            }).catch(err => console.error('toast error:', err));
        }
    }, [canDelete]);

    const deleteClass = () => new Promise((resolve, reject) => {
        deleteClassApiService(idToDelete)
            .then((response: any) => {
                if (!!response.message) return reject("error removing activity");

                resolve(true);
            }).catch(error => console.error(error));
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title="Confirmar Deleção"
                                                      children={<ConfirmRemoveContent title="Atenção!"
                                                                                      description="Tem certeza que deseja deletar essa turma?"/>}
                                                      setCanDelete={setCanDelete}
                                                      setModalState={setConfirmRemoveModal}
                                                      modalState={confirmRemoveModal}
            />}

            <Header title="Turmas" buttonText="Cadastrar Nova Turma"
                    onButtonClick={() => navigate('/gestao-escolar/nova-turma')}/>
            {!loading ? (
                <React.Fragment>
                    <S.FindClassContainer>
                        <Title size={20}>Encontre sua turma</Title>
                        <S.FilterContainer>
                            <SelectInLabel selectedValue={filters.turma}
                                           onChange={(v: any) => handleFilterChange('turma', v?.value)}
                                           options={classesOptions} label="Turma"/>
                            <SelectInLabel selectedValue={filters.situacao}
                                           onChange={(v: any) => handleFilterChange('situacao', v?.value)}
                                           options={statusData} label="Situação"/>
                            <S.ClearButton>
                                <Button onClick={clearFilters} label="Limpar" type="reset"
                                        justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT}/>
                            </S.ClearButton>
                        </S.FilterContainer>
                    </S.FindClassContainer>
                    <ClassesTable data={classes} reload={reload} setReload={setReload}
                                  confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal}
                                  setIdToDelete={setIdToDelete}/>
                </React.Fragment>
            ) : <Loading/>}
        </S.Container>
    );
};
