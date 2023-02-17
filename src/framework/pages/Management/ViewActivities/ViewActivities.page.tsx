import React, {useState, useEffect} from 'react';
import * as S from './ViewActivities.style';
import {ViewActivities} from "@templates/ViewActivities/ViewActivities.template";
import {getActivitiesApiService, searchActivityApiService} from "@service/api/activity.service";
import {ResponseActivities} from '~/models/datacore';
import {toast} from "react-toastify";

const ViewActivitiesPage: React.FC = () => {
    const emptyFilters = {
        descricao: '',
        situacao: true
    };

    const [activities, setActivities] = useState<ResponseActivities[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);
    const [filtersLoading, setFiltersLoading] = useState<boolean>(true);

    useEffect(() => {
        getActivitiesApiService()
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setActivities(res?.data);
                setIsAllReqDone([true]);
            }).catch(err => toast.error(err));
    }, [reload]);

    useEffect(() => {
        searchActivityApiService(filters)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setActivities(res?.data);
                setFiltersLoading(false);
            }).catch(err => toast.error(err));
    }, [filters]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    const handleFilterChange = (field: string, value: any) => {
        setFiltersLoading(true);
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => {
        setFiltersLoading(true);
        setFilters(emptyFilters);
    };

    return (
        <S.Container>
            <ViewActivities activities={activities} reload={reload} setReload={setReload}
                            filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters}
                            isAllReqDone={isAllReqDone} setIsAllReqDone={setIsAllReqDone}
                            loading={loading} setLoading={setLoading} filtersLoading={filtersLoading}
                            setFiltersLoading={setFiltersLoading}/>
        </S.Container>
    )
};

export default ViewActivitiesPage;
