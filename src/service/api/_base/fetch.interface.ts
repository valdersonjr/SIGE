export type FetchRequest<T = unknown> = {
  method: string;
  headers?: Headers;
  body?: T;
  title?: string;
  stringifyBody?: boolean;
  returnBase64File?: boolean;
  tokenCustom?: string;
};

export type BaseRequest<T = unknown, S = unknown> = {
  method: string;
  headers?: T;
  body?: S;
  'data-binary'?: Blob | File;
  useBaseUrl?: boolean;
};

export interface BaseResponse<T> extends Response {
  data: T;
}

export interface requestBalanceAsync {
  condominiumId: number;
  condominiumCnpj: string;
}

export interface RequestFiveLastTransactions {
  bankAccountId: string;
}
