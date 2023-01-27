import React, {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import {Header, InputInLabel} from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";
import { ViewClassesProps } from "./ViewClasses.interface";
import { statusOptions } from "./ViewClasses.logic";
import {ensinoOptions} from "~/utils/ensino-options";

import * as S from './ViewClasses.style';
import {deleteClassApiService, searchClassApiService} from "@service/api";
import ConfirmRemoveData from "@organisms/Modals/ConfirmRemove/ConfirmRemoveData.organism";
import {
    ConfirmRemoveClassContent
} from "@templates/ViewClasses/ConfirmRemoveClassModalContent/ConfirmRemoveClassModal.content";

export const ViewClasses: React.FC<ViewClassesProps> = ({ classes, reload, setReload }) => {
    const navigate = useNavigate();

    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    const [filters, setFilters] = useState({
        ensino: "",
        descricao: "",
        status: ""
    });

    const handleFilters = () => {
        searchClassApiService({
            periodo_turma: '',
            turma: '',
            situacao: filters.status === 'INATIVO'
        })
            .then(() => {})
            .catch(err => console.error(err));
    }

    const handleReset = () => {
        setFilters({
            ensino: "",
            descricao: "",
            status: ""
        });
    }

    useEffect(() => {
        handleFilters();
    }, [filters]);

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
            <S.FindClassContainer>
                <Title size={20}>Encontre sua turma</Title>
                <S.FilterContainer>
                    <InputInLabel value={filters.descricao} onChange={value => setFilters({...filters, descricao: value})} label="Nome" />
                    <SelectInLabel selectedValue={filters.ensino} onChange={(select: any) => setFilters({...filters, ensino: select.value})} options={ensinoOptions} label="Ensino" />
                    <SelectInLabel selectedValue={filters.status} onChange={(select: any) => setFilters({...filters, status: select.value})} options={statusOptions} label="Situação" />
                    <S.ClearButton>
                        <Button onClick={handleReset} label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable filters={filters} data={classes} reload={reload} setReload={setReload}
                confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal}
                setIdToDelete={setIdToDelete} />
        </S.Container>
    )
}
