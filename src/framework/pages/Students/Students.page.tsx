import React, {useEffect, useState} from 'react';
import {Students} from '~/framework/templates';
import {getAllStudentsApiService} from '@service/api';
import {datacore} from '~/models';
import {toast} from "react-toastify";

const StudentsPage: React.FC = () => {
    const [students, setStudents] = useState<datacore.ResponseStudent[]>();
    const [reload, setReload] = useState(false);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(() => {
        getAllStudentsApiService().then((response: any) => {
            if (!!response.message) return toast.error(response.message);

            setStudents(response.data);
            setIsAllReqDone([true]);
        }).catch(error => toast.error(error));
    }, [reload]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return <Students students={students} reload={reload} setReload={setReload}
                        setLoading={setLoading} loading={loading}
                        isAllReqDone={isAllReqDone} setIsAllReqDone={setIsAllReqDone} />;
}

export default StudentsPage;
