import React, { useEffect, useState } from 'react';
import * as S from "./ViewActivity.style";
import ViewActivity from "@templates/ViewActivity/ViewActivity.template";
import { useParams } from 'react-router-dom';

import { getActivitieApiService } from '~/service/api/activity.service';
import { ResponseActivities } from '~/models/datacore';

const ViewActivityPage: React.FC = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState<ResponseActivities>();

    useEffect(() => {
        getActivitieApiService(Number(id)).then(response => {
            setActivity(response.data);
        })
    },[]);

    return (
        <S.Container>
            <ViewActivity activity={activity} />
        </S.Container>
    );
}

export default ViewActivityPage;
