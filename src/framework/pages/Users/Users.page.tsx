import React, { useEffect, useState } from "react";
import {Users} from "@templates/Users/Users.template";
import { getAllUsersApiService } from "~/service/api";
import { datacore } from "~/models";

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<datacore.FetchUserResponse[]>();
    const [reload, setReload] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(() => {
        getAllUsersApiService()
            .then(response => {
                setUsers(response.data);
                setIsAllReqDone([true]);
            }).catch(err => console.error(err));
    }, [reload]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return <Users users={users} reload={reload} setReload={setReload}
                  loading={loading} setLoading={setLoading}
                  setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone} />;
}

export default UsersPage;
