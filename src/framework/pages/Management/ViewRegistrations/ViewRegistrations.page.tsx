import React, { useEffect, useState } from 'react';
import * as S from './ViewRegistrations.style';
import {ViewRegistrations} from "@templates/ViewRegistrations/ViewRegistrations.template";
import {getRegistrationsApiService} from "@service/api/registration.service";

const ViewRegistrationsPage: React.FC = () => {
    const [registrations, setRegistrations] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getRegistrationsApiService()
            .then(response => setRegistrations(response.data))
            .catch(err => console.error(err));
    }, [reload]);


    return (
        <S.Container>
            <ViewRegistrations registrations={registrations} reload={reload} setReload={setReload} />
        </S.Container>
    )
};

export default ViewRegistrationsPage;
