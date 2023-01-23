import React, { useEffect, useState } from 'react';

import * as S from './ViewActivities.style';
import {Header} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {ActivitiesTable} from "@organisms/ActivitiesTable/ActivitiesTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewActivitiesProps} from "@templates/ViewActivities/ViewActivities.interface";
import { statusData } from './ViewActivities.logic';

export const ViewActivities: React.FC<ViewActivitiesProps> = ({activities, setReload, reload}) => {
    const navigate = useNavigate();
    const [activitiesData, setActivitiesData] = useState<Array<{value: string | number, label: string}>>([]);
    const [filters, setFilters] = useState({ activity: "", status: "" });
   
    const [filterControll, setFilterControll] = useState({ activity: "", status: "" });
    
    const [selectedValue, setSelectedValue] = useState({ activity: "", status: "" });

    useEffect(()=> {
        let activitiesDataArr = [{value:"", label: ""}];

        if(activities){
            activities.forEach(activity => {
                activitiesDataArr = [...activitiesDataArr, { value: activity.descricao, label: activity.descricao }];
            });
        }
        setActivitiesData(activitiesDataArr);
    },[activities]);

    const handleSelectChange = (e:any, type:string) => {  
        setFilterControll({...filterControll, [type]: e. value});
        setSelectedValue({...selectedValue, [type]: e. value});
    }
    
    const handleFilterSubmit = () => {
        setFilters(filterControll);
    }

    const handleCleanFilter = () => {
        setFilters({ activity: "", status: "" });
        setSelectedValue({ activity: "", status: "" });
        setFilterControll({ activity: "", status: "" });
    }

    return (
        <S.Container>
            <Header title="Atividades" buttonText="Cadastrar Nova Atividade" onButtonClick={() => navigate('/gestao-escolar/nova-atividade')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre Atividade</Title>
                <S.FilterContainer>
                    <SelectInLabel options={activitiesData} selectedValue={selectedValue.activity} label="Atividade" onChange={(e) => handleSelectChange(e, "activity")} />
                    <SelectInLabel options={statusData} selectedValue={selectedValue.status} label="Situação" onChange={(e) => handleSelectChange(e, "status")} />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" onClick={handleCleanFilter} variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" onClick={handleFilterSubmit} variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ActivitiesTable data={activities} filters={filters} reload={reload} setReload={setReload} />
        </S.Container>
    );
};
