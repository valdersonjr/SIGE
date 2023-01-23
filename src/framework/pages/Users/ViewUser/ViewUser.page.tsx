import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ViewUser from "~/framework/templates/ViewUser/ViewUser.template";
import { FetchUserResponse } from "~/models/datacore";
import { getUserByIdApiService } from "~/service/api";

import * as S from "./ViewUser.style";

const ViewUserPage:React.FC = () => {
    const { id } = useParams();
    const [user, setUser] = useState<FetchUserResponse>();

    useEffect(() => {
        getUserByIdApiService(Number(id)).then((response) => {
            setUser(response.data);
        });
    }, []);

    return(
        <S.Container>
            <ViewUser user={user} />
        </S.Container>
    )
}

export default ViewUserPage;