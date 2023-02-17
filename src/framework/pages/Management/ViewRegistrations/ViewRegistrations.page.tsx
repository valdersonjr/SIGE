import React, {useEffect, useState} from 'react';
import * as S from './ViewRegistrations.style';
import {ViewRegistrations} from "@templates/ViewRegistrations/ViewRegistrations.template";
import {getRegistrationsApiService, searchRegistrationApiService} from "@service/api/registration.service";
import {getClassesApiService} from "@service/api";
import {toast} from "react-toastify";

const ViewRegistrationsPage: React.FC = () => {
    const emptyFilters = {
        ano: '',
        nome: '',
        matricula: '',
        periodo_turma: '',
        turma: '',
        situacao: true
    };

    const [registrations, setRegistrations] = useState([]);
    const [classes, setClasses] = useState<any>([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false, false]);
    const [filtersLoading, setFiltersLoading] = useState<boolean>(true);

    useEffect(() => {
        getRegistrationsApiService()
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setRegistrations(res?.data);
                setIsAllReqDone(prev => [true, prev[1]]);
            }).catch(err => toast.error(err));
    }, [reload]);

    useEffect(() => {
        getClassesApiService()
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                const FORMATTED_DATA = res.data.map((it: any) => {
                    return {label: it.descricao, value: it.id}
                });
                setClasses([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
                setIsAllReqDone(prev => [prev[0], true]);
            }).catch(error => toast.error(error));
    }, []);

    useEffect(() => {
        searchRegistrationApiService(filters)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setRegistrations(res?.data);
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
            <ViewRegistrations registrations={registrations} reload={reload} setReload={setReload}
                               filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters}
                               loading={loading} setLoading={setLoading}
                               filtersLoading={filtersLoading} setFiltersLoading={setFiltersLoading}
                               setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone} classes={classes}/>
        </S.Container>
    );
};

export default ViewRegistrationsPage;
