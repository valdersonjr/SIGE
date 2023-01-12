import React, { useEffect, useState } from 'react';
import { Students } from '~/framework/templates';
import { getStudentsApiService } from '@service/api';
import { datacore } from '~/models';

const StudentsPage: React.FC = () => {
    const [studentList, setStudentList] = useState<datacore.ResponseStudent[]>();

    useEffect(() => {
        getStudentsApiService().then(response => {
            setStudentList(response.data);
        }).catch(error => console.log(error));
    },[]);
    
    console.log(studentList);

    return <Students />;
}

export default StudentsPage;