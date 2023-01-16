import React, { useEffect, useState } from 'react';
import * as S from './ViewRegistrations.style';
import {ViewRegistrations} from "@templates/ViewRegistrations/ViewRegistrations.template";
import {getRegistrationsApiService} from "@service/api/registration.service";

const ViewRegistrationsPage: React.FC = () => {
    // @ts-ignore
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        getRegistrationsApiService()
            .then(response => {
                setRegistrations(response.data);
            }).catch(err => console.error(err));
    }, []);


    return (
        <S.Container>
            <ViewRegistrations registrations={registrations} />
        </S.Container>
    )
};

export default ViewRegistrationsPage;
