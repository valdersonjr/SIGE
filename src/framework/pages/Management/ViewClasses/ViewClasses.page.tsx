import React, { useEffect, useState } from "react";
import { ViewClasses } from "~/framework/templates";
import {getClassesApiService} from "~/service/api";
import * as S from './ViewClasses.style';

const ViewClassesPage: React.FC = () => {
    const emptyFilters = {
        periodo_turma: '',
        turma: '',
        situacao: ''
    };

    const [classes, setClasses] = useState<any>([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    useEffect(() => {
        getClassesApiService()
            .then(response => {
                setClasses(response?.data);
            })
            .catch(err => console.error(err));
    }, [reload]);

    // useEffect(() => {
    //     searchClassApiService(filters)
    //         .then((response: any) => setClasses(response?.data))
    //         .catch(err => console.error(err));
    // }, [filters]);

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => setFilters(emptyFilters);

    return (
        <S.Container>
            <ViewClasses classes={classes} reload={reload} setReload={setReload}
                         filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters} />
        </S.Container>
    );
};

export default ViewClassesPage;
