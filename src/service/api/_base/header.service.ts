export interface CustomHeaders {
  tokenCustom?: string;
  headers?: Headers;
}

export const mountHeaders = async ({ headers }: CustomHeaders): Promise<Headers> => {
  const header = new Headers(headers);

  header.append('Accept', 'application/json');
  header.append('Content-Type', 'application/json');
  header.append('Access-Control-Allow-Origin', '*');
  header.append('cors', 'no-cors');
  header.append('mode', 'no-cors');
  header.append('sec-fetch-mode', 'cors');
  header.append('sec-fetch-site', 'cross-site');
  header.append('access_token', localStorage.getItem('access_token') || '');
  header.append('Authorization',`Bearer ${localStorage.getItem('access_token')}`);

  return header;
};
