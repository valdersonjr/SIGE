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

export const ViewActivities: React.FC<ViewActivitiesProps> = ({activities, setReload, reload}) => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({ activity: "", status: "" });
    const [filterControll, setFilterControll] = useState({ activity: "", status: "" });
    const [selectedValue, setSelectedValue] = useState({ activity: "", status: "" });
    const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [idToDelete, setIdToDelete] = useState<number>(-1);

    useEffect(()=> {
        let activitiesDataArr = [{value:"", label: ""}];

        if(activities){
            activities.forEach(activity => {
                activitiesDataArr = [...activitiesDataArr, { value: activity.descricao, label: activity.descricao }];
            });
        }
    },[activities]);

    useEffect(() => {
        if(canSave){
            deleteActivityApiService(idToDelete).then((response:any) => {
                if(response.message){
                    alert("Não foi possível excluir a atividade");
                }
                else{
                    setReload && setReload(!reload);
                    setConfirmRemoveModal(!confirmRemoveModal);
                }
            });
            setCanSave(false);
        }
    },[canSave]);

    const handleSelectChange = (e:string, type:string) => {  
        setFilterControll({...filterControll, [type]: e});
        setSelectedValue({...selectedValue, [type]: e});
    }
    
    const handleFilterSubmit = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setFilters(filterControll);
    }

    const handleCleanFilter = () => {
        setFilters({ activity: "", status: "" });
        setSelectedValue({ activity: "", status: "" });
        setFilterControll({ activity: "", status: "" });
    }

    return (
        <S.Container>
            {confirmRemoveModal && <ConfirmRemoveData title='Confirmar Deleção' setCanSave={setCanSave} children={<ConfirmRemoveClassContent />} modalState={confirmRemoveModal} setModalState={setConfirmRemoveModal} />}
            <Header title="Atividades" buttonText="Cadastrar Nova Atividade" onButtonClick={() => navigate('/gestao-escolar/nova-atividade')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre a atividade</Title>
                <S.FilterContainer>
                    <InputInLabel label="Atividade" onChange={(e) => handleSelectChange(e, "activity")} />
                    <SelectInLabel options={statusData} selectedValue={selectedValue.status} label="Situação" onChange={(e:any) => handleSelectChange(e.value, "status")} />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" onClick={handleCleanFilter} variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" onClick={handleFilterSubmit} variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ActivitiesTable data={activities} filters={filters} reload={reload} setReload={setReload} confirmRemoveModal={confirmRemoveModal} setConfirmRemoveModal={setConfirmRemoveModal} setIdToDelete={setIdToDelete} />
        </S.Container>
    );
};
