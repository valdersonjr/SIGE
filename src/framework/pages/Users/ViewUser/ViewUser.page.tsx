import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewUser from "~/framework/templates/ViewUser/ViewUser.template";
import { FetchUserResponse } from "~/models/datacore";
import { getUserByIdApiService } from "~/service/api";
import * as S from "./ViewUser.style";

const ViewUserPage: React.FC = () => {
    const { id } = useParams();
    const [user, setUser] = useState<FetchUserResponse>();
    const [reload, setReload] = useState(false);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(() => {
        getUserByIdApiService(Number(id))
            .then((response) => {
                setUser(response.data);
                setIsAllReqDone([true]);
            });
    }, [reload]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return(
        <S.Container>
            <ViewUser user={user} reload={reload} setReload={setReload} loading={loading} setLoading={setLoading}
                      setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone} />
        </S.Container>
    )
}

export default ViewUserPage;
