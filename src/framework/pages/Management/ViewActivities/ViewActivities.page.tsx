import React, {useState, useEffect} from 'react';
import * as S from './ViewActivities.style';
import {ViewActivities} from "@templates/ViewActivities/ViewActivities.template";
import {getActivitiesApiService} from "@service/api/activity.service";
import { ResponseActivities } from '~/models/datacore';

const ViewActivitiesPage: React.FC = () => {
    const [activities, setActivities] = useState<ResponseActivities[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        getActivitiesApiService()
            .then(response => {
                setActivities(response.data);
            }).catch(err => console.error(err));
    }, [reload]);

    return (
        <S.Container>
            <ViewActivities activities={activities} reload={reload} setReload={setReload} />
        </S.Container>
    )
};

export default ViewActivitiesPage;
