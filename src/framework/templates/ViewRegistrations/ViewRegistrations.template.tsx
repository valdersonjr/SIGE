import React, {useEffect, useState} from 'react';
import * as S from './ViewRegistrations.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {RegistrationsTable} from "@organisms/RegistrationsTable/RegistrationsTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewRegistrationsProps} from "@templates/ViewRegistrations/ViewRegistrations.interface";
import {anoOptions} from "@templates/NewRegistration/NewRegistration.logic";
import {Loading} from "@organisms/Loading/Loading.organism";
import ConfirmRemoveData from "@organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";
import {deleteRegistrationApiService} from "@service/api";
import {toast} from "react-toastify";

export const ViewRegistrations: React.FC<ViewRegistrationsProps> = ({
                                                                        registrations,
                                                                        reload,
                                                                        setReload,
                                                                        handleFilterChange,
                                                                        filters,
                                                                        clearFilters,
                                                                        loading,
                                                                        filtersLoading,
                                                                        setFiltersLoading,
                                                                        classes
                                                                    }) => {
    const navigate = useNavigate();
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(() => {
        if (canDelete) {
            toast.promise(
                () => deleteRegistration(),
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
    }, [canDelete]);

    const deleteRegistration = () => new Promise((resolve, reject) => {
        deleteRegistrationApiService(idToDelete)
            .then((response: any) => {
                if (!!response?.message) return reject("error removing registration");

                resolve(true);
            }).catch(err => toast.error(err));
    });

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanDelete={setCanDelete}
                                                      children={<ConfirmRemoveContent
                                                          title="Atenção!"
                                                          description="Tem certeza que deseja deletar essa matrícula?"/>}
                                                      modalState={confirmRemoveModal}
                                                      setModalState={setConfirmRemoveModal}/>}

            <Header title="Matrículas" buttonText="Nova Matrícula"
                    onButtonClick={() => navigate('/gestao-escolar/nova-matricula')}/>

            {!loading ? (
                <React.Fragment>
                    <S.FindClassContainer>
                        <Title size={20}>Encontre a matrícula</Title>
                        <S.FilterContainer>
                            <InputInLabel label="Nome do Aluno" value={filters.nome}
                                          onChange={value => handleFilterChange('nome', value)}/>
                            <SelectInLabel label="Ano de Ingresso" selectedValue={filters.ano}
                                           onChange={(v: any) => handleFilterChange('ano', v?.value)}
                                           options={anoOptions}/>
                            <SelectInLabel label="Turma" selectedValue={filters.turma}
                                           onChange={(v: any) => handleFilterChange('turma', v?.value)}
                                           options={classes}/>
                            <S.ClearButton>
                                <Button label="Limpar" type="reset" onClick={clearFilters}
                                        justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT}/>
                            </S.ClearButton>
                        </S.FilterContainer>
                    </S.FindClassContainer>
                    <RegistrationsTable data={registrations} reload={reload} setReload={setReload}
                                        confirmRemoveModal={confirmRemoveModal}
                                        setConfirmRemoveModal={setConfirmRemoveModal}
                                        setIdToDelete={setIdToDelete}
                                        setFiltersLoading={setFiltersLoading} filtersLoading={filtersLoading}
                    />
                </React.Fragment>
            ) : <Loading/>}
        </S.Container>
    );
};
