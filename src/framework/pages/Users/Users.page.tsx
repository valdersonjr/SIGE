import React, { useEffect, useState } from "react";
import {Users} from "@templates/Users/Users.template";
import {getAllUsersApiService, searchUserApiService} from "~/service/api";
import { datacore } from "~/models";
import {toast} from "react-toastify";

const UsersPage: React.FC = () => {
    const emptyFilters = {
        nome: '',
        perfil: '',
        situacao: null
    };

    const [users, setUsers] = useState<datacore.FetchUserResponse[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [filters, setFilters] = useState(emptyFilters);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);
    const [filtersLoading, setFiltersLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllUsersApiService()
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setUsers(res?.data);
                setIsAllReqDone([true]);
            }).catch(err => toast.error(err));
    }, [reload]);

    useEffect(() => {
        searchUserApiService(filters)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setUsers(res?.data);
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

    return <Users users={users} reload={reload} setReload={setReload}
                  loading={loading} setLoading={setLoading} filters={filters}
                  setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone}
                  filtersLoading={filtersLoading} setFiltersLoading={setFiltersLoading}
                  handleFilterChange={handleFilterChange} clearFilters={clearFilters} />;
}

export default UsersPage;
