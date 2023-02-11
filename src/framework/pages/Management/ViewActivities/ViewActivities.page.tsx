import React, {useState, useEffect} from 'react';
import * as S from './ViewActivities.style';
import {ViewActivities} from "@templates/ViewActivities/ViewActivities.template";
import {getActivitiesApiService} from "@service/api/activity.service";
import { ResponseActivities } from '~/models/datacore';

const ViewActivitiesPage: React.FC = () => {
    const emptyFilters = {
        descricao: '',
        situacao: true
    };

    const [activities, setActivities] = useState<ResponseActivities[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [filters, setFilters] = useState(emptyFilters);

    useEffect(() => {
        getActivitiesApiService()
            .then(response => setActivities(response?.data))
            .catch(err => console.error(err));
    }, [reload]);

    // useEffect(() => {
    //     searchActivityApiService(filters)
    //         .then((response: any) => setActivities(response?.data))
    //         .catch(err => console.error(err));
    // }, [filters]);

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => setFilters(emptyFilters);

    return (
        <S.Container>
            <ViewActivities activities={activities} reload={reload} setReload={setReload}
                            filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters} />
        </S.Container>
    )
};

export default ViewActivitiesPage;
