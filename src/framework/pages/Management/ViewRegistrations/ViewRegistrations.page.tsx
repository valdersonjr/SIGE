import React, { useEffect, useState } from 'react';
import * as S from './ViewRegistrations.style';
import {ViewRegistrations} from "@templates/ViewRegistrations/ViewRegistrations.template";
import {getRegistrationsApiService, searchRegistrationApiService} from "@service/api/registration.service";

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
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    useEffect(() => {
        getRegistrationsApiService()
            .then(response => setRegistrations(response.data))
            .catch(err => console.error(err));
    }, [reload]);

    useEffect(() => {
        searchRegistrationApiService(filters)
            .then((response: any) => setRegistrations(response?.data))
            .catch(err => console.error(err));
    }, [filters]);

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => setFilters(emptyFilters);

    return (
        <S.Container>
            <ViewRegistrations registrations={registrations} reload={reload} setReload={setReload}
                               filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters} />
        </S.Container>
    )
};

export default ViewRegistrationsPage;
