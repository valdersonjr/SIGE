export interface FetchRequest extends Partial<RequestInit> {
  endpoint: RequestInfo;
}

export const fetchRequest = async ({ endpoint, headers, method, body }: FetchRequest) => {
  try {
    const result = await fetch(endpoint, { headers, method, body });
    const data = await result.json();

    return {
      ...result,
      data,
    };
  } catch (err) {
    throw new Error('Erro ao tentar fazer uma requisição');
  }
};
