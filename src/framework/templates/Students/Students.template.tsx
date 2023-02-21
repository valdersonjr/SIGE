import React, {useEffect, useState} from 'react';
import {Banner, InputInLabel} from '~/framework/molecules';
import {StudentTable} from '~/framework/organisms';
import {StudentsPageBanner} from '~/framework/atoms/Icons';
import {useNavigate} from 'react-router-dom';
import {StudentsProps} from './Students.interface';
import * as S from './Students.style';
import {deleteStudentApiService} from '~/service/api';
import ConfirmRemoveData from '~/framework/organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism';
import {Loading} from "@organisms/Loading/Loading.organism";
import {ConfirmRemoveContent} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content";
import {toast} from "react-toastify";
import {Button, Title, VariantButtonEnum} from "@atoms";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";
import {statusData} from "@templates/ViewActivities/ViewActivities.logic";

export const Students: React.FC<StudentsProps> = ({
                                                      students,
                                                      setFiltersLoading,
                                                      filtersLoading,
                                                      clearFilters,
                                                      handleFilterChange,
                                                      filters,
                                                      reload,
                                                      setReload,
                                                      loading
                                                  }) => {
    const navigate = useNavigate();

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

    return <S.Container>
        {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanDelete={setCanDelete}
                                                  children={<ConfirmRemoveContent
                                                      title="Atenção!"
                                                      description="Tem certeza que deseja deletar esse aluno?"/>}
                                                  modalState={confirmRemoveModal}
                                                  setModalState={setConfirmRemoveModal}/>}

        <Banner Icon={<StudentsPageBanner/>} type="students" title='Área de Alunos'
                text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. Caso desejar, cadastre um novo aluno clicando ao lado."
                buttonLabel="Novo Aluno" onButtonClick={() => navigate("/alunos/novo-aluno")}/>
        {!loading ? (
            <S.Content>
                <S.FindStudentContainer>
                    <Title size={20}>Encontre o aluno</Title>
                    <S.FilterContainer>
                        <InputInLabel label="Aluno" value={filters?.nome} placeholder="Digite aqui..."
                                      onChange={v => handleFilterChange('nome', v)}/>
                        <InputSelectInLabel label="Situação" options={statusData}
                                            onChange={(v: any) => handleFilterChange('situacao', v?.value)}/>
                        <S.ClearButton>
                            <Button label="Limpar filtro" type="reset" justifyText="center"
                                    onClick={clearFilters} variant={VariantButtonEnum.PRIMARY_TRANSPARENT}/>
                        </S.ClearButton>
                    </S.FilterContainer>
                </S.FindStudentContainer>
                <StudentTable data={students} reload={reload} setIdToDelete={setIdToDelete}
                              setReload={setReload} confirmRemoveModal={confirmRemoveModal}
                              setConfirmRemoveModal={setConfirmRemoveModal}
                              setFiltersLoading={setFiltersLoading} filtersLoading={filtersLoading}/>
            </S.Content>
        ) : <Loading/>}
    </S.Container>
}
