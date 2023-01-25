import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ViewStudent } from '~/framework/templates/';
import { ResponseStudent } from '~/models/datacore';
import { getStudentByIdApiService } from '~/service/api';

const ViewStudentPage: React.FC = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<ResponseStudent>();

    useEffect(()=> {
        getStudentByIdApiService(Number(id)).then((response:any) => {
            if(response.message){
                console.log(response.message);
                return;
            }            

            setStudent(response.data);
        })
    }, []);

    return <ViewStudent student={student} />
}

export default ViewStudentPage;