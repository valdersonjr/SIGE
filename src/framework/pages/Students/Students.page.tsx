import React, { useEffect, useState } from 'react';
import { Students } from '~/framework/templates';
import { getAllStudentsApiService } from '@service/api';
import { datacore } from '~/models';

const StudentsPage: React.FC = () => {
    // @ts-ignore
    const [students, setStudents] = useState<datacore.ResponseStudent[]>();
    const[reload, setReload] = useState(false);

    useEffect(() => {
        getAllStudentsApiService().then((response:any) => {
            if(response.message){
                alert(response.message);
            }
            else {
                setStudents(response.data);
            }
        }).catch(error => console.error(error));
    },[reload]);

    return <Students students={students} reload={reload} setReload={setReload} />;
}

export default StudentsPage;
