import { FetchRequest } from './fetch.interface';
import { fetchRequest } from './fetch.service';
import { mountHeaders } from './header.service';

const baseApi = process.env.REACT_APP_API_BASE_URL;

export const callApiBaseAsync = async (endpoint: RequestInfo, call: FetchRequest) => {
  const { method, body, tokenCustom, headers } = call;

  const requestHeader = await mountHeaders({ tokenCustom, headers });

  const result = await fetchRequest({
    endpoint: `${baseApi}${endpoint}`,
    headers: requestHeader,
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (result && result?.status >= 300) {
    throw new Error('default', result?.data.message.title || result?.data.message);
  }

  return result?.data;
};
