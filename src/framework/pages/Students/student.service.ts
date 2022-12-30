import { datacore } from '~/models';
import { callApiBaseAsync } from '@service/api/_base';
// import {CreateStudentDto} from "~/framework/pages/Students/student.interface";
const endpoint = '/aluno';

export const createStudentApiService = async (
    data: any,
): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'AUTH API - createStudentApiService',
        method: 'POST',
        headers: new Headers(),
        body: {...data},
    });
};

export const getStudentApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'AUTH API - getStudentApiService',
        method: 'GET',
        headers: new Headers(),
    });
};
