import React, {useEffect, useState} from 'react';
import {Students} from '~/framework/templates';
import {getAllStudentsApiService, searchStudentApiService} from '@service/api';
import {datacore} from '~/models';
import {toast} from "react-toastify";

const StudentsPage: React.FC = () => {
    const emptyFilters = {
        nome: '',
        situacao: true
    };

    const [students, setStudents] = useState<datacore.ResponseStudent[]>([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);
    const [filtersLoading, setFiltersLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllStudentsApiService()
            .then((res: any) => {
                if (!!res.message) return toast.error(res.message);

                setStudents(res.data);
                setIsAllReqDone([true]);
            }).catch(err => toast.error(err));
    }, [reload]);

    useEffect(() => {
        searchStudentApiService(filters)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setStudents(res?.data);
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

    return <Students students={students} reload={reload} setReload={setReload}
                     setLoading={setLoading} loading={loading} filters={filters}
                     isAllReqDone={isAllReqDone} setIsAllReqDone={setIsAllReqDone}
                     clearFilters={clearFilters} handleFilterChange={handleFilterChange}
                     filtersLoading={filtersLoading} setFiltersLoading={setFiltersLoading}/>;
}

export default StudentsPage;
