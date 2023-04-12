import React, {useEffect, useState} from "react";
import {ViewClasses} from "~/framework/templates";
import {getClassesApiService, searchClassApiService} from "~/service/api";
import * as S from './ViewClasses.style';
import {toast} from "react-toastify";

const ViewClassesPage: React.FC = () => {
    const emptyFilters = {
        descricao: '',
        situacao: null
    };

    const [classes, setClasses] = useState<any>([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);
    const [filtersLoading, setFiltersLoading] = useState<boolean>(true);

    useEffect(() => {
        getClassesApiService()
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setClasses(res?.data);
                setIsAllReqDone([true]);
            }).catch(err => toast.error(err));
    }, [reload]);

    useEffect(() => {
        searchClassApiService(filters)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setClasses(res?.data);
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
            <ViewClasses classes={classes} reload={reload} setReload={setReload}
                         filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters}
                         setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone}
                         loading={loading} setLoading={setLoading}
                         filtersLoading={filtersLoading} setFiltersLoading={setFiltersLoading}/>
        </S.Container>
    );
};

export default ViewClassesPage;
