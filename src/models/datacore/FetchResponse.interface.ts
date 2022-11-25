export interface ResponseError {
  data: {
    message:
      | string
      | {
          title: string;
        };
  };
}

export interface FetchResponse<T> {
  data: T;
  status: number;
}
