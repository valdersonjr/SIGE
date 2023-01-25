import React, { useEffect, useState } from "react";
import {Users} from "@templates/Users/Users.template";
import { getAllUsersApiService } from "~/service/api";
import { datacore } from "~/models";

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<datacore.FetchUserResponse[]>();
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        getAllUsersApiService().then(response => {
            setUsers(response.data);
        }).catch(err => console.error(err));
    }, [reload]);

    return <Users users={users} reload={reload} setReload={setReload} />;
}

export default UsersPage;
