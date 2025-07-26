import { HttpResponseInterface } from "../interfaces/http-response-interface";
export const ok = async (data: any): Promise<HttpResponseInterface> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponseInterface> => {
  return {
    statusCode: 204,
    body: null,
  };
};
