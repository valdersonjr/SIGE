import React, { useEffect, useState } from 'react';
import * as S from './ViewRegistrations.style';
import {ViewRegistrations} from "@templates/ViewRegistrations/ViewRegistrations.template";
import {getRegistrationsApiService, searchRegistrationApiService} from "@service/api/registration.service";
import {getClassesApiService} from "@service/api";

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

    useEffect(() => {
        getRegistrationsApiService()
            .then(response => {
                setRegistrations(response.data);
                setIsAllReqDone(prev => [true, prev[1]]);
            }).catch(err => console.error(err));
    }, [reload]);

    useEffect(() => {
        getClassesApiService()
            .then((response: any) => {
                const FORMATTED_DATA = response.data.map((it: any) => {return {label: it.descricao, value: it.id}});
                setClasses([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
                setIsAllReqDone(prev => [prev[0], true]);
            }).catch(error => console.error(error));
    }, []);

    useEffect(() => {
        searchRegistrationApiService(filters)
            .then((response: any) => setRegistrations(response?.data))
            .catch(err => console.error(err));
    }, [filters]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => setFilters(emptyFilters);

    return (
        <S.Container>
            <ViewRegistrations registrations={registrations} reload={reload} setReload={setReload}
                               filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters}
                               loading={loading} setLoading={setLoading}
                               setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone} classes={classes} />
        </S.Container>
    );
};

export default ViewRegistrationsPage;
