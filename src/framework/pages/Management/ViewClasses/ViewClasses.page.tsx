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
    const [classesOptions, setClassesOptions] = useState<any[]>([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false, false]);

    useEffect(() => {
        getClassesApiService()
            .then(response => {
                setClasses(response?.data);
                setIsAllReqDone(prev => [true, prev[1]]);
            })
            .catch(err => console.error(err));
    }, [reload]);

    useEffect(() => {
        const FORMATTED_DATA = classes.map((it: any) => {return {label: it.descricao, value: it.id}});
        setClassesOptions([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
        setIsAllReqDone(prev => [prev[0], true  ]);
    }, []);

    // useEffect(() => {
    //     searchClassApiService(filters)
    //         .then((response: any) => setClasses(response?.data))
    //         .catch(err => console.error(err));
    // }, [filters]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    const clearFilters = () => setFilters(emptyFilters);

    return (
        <S.Container>
            <ViewClasses classes={classes} reload={reload} setReload={setReload}
                         filters={filters} handleFilterChange={handleFilterChange} clearFilters={clearFilters}
                         setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone}
                         loading={loading} setLoading={setLoading} classesOptions={classesOptions} />
        </S.Container>
    );
};

export default ViewClassesPage;
