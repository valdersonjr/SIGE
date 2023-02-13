import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ViewStudent } from '~/framework/templates/';
import { ResponseStudent } from '~/models/datacore';
import { getStudentByIdApiService } from '~/service/api';

const ViewStudentPage: React.FC = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<ResponseStudent>();

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(()=> {
        getStudentByIdApiService(Number(id)).then((response:any) => {
            if (response.message) return;

            setStudent(response.data);
            setIsAllReqDone([true]);
        })
    }, []);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return <ViewStudent student={student} loading={loading} setLoading={setLoading}
                            setIsAllReqDone={setIsAllReqDone} isAllReqDone={isAllReqDone} />
}

export default ViewStudentPage;
