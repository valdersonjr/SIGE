import React, { useEffect, useState } from 'react';
import { Students } from '~/framework/templates';
import { getStudentsApiService } from '@service/api';
import { datacore } from '~/models';

const StudentsPage: React.FC = () => {
    // @ts-ignore
    const [studentList, setStudentList] = useState<datacore.ResponseStudent[]>();

    useEffect(() => {
        getStudentsApiService().then(response => {
            setStudentList(response.data);
        }).catch(error => console.error(error));
    },[]);

    return <Students />;
}

export default StudentsPage;
