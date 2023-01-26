import { datacore } from '~/models';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
import { callApiBaseAsync } from './_base';
const endpoint = '/auth';

export const loginApiService = async (
  data: RequestAuthUser,
): Promise<datacore.FetchResponse<datacore.RequestAuthUser>> => {
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - loginApiService',
    method: 'POST',
    headers: new Headers(),
    body: {
      email: data.email,
      senha: data.senha,
    },
  });
};

export const getAuthenticatedUser = async ():Promise<datacore.FetchResponse<datacore.FetchUserResponse>> => {
  return callApiBaseAsync(`${endpoint}/me`, {
    title: 'AUTH API - loginApiService',
    method: 'GET',
  })
}
