import axios, {
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosRequestConfig,
  Method,
  AxiosStatic,
} from 'axios';
import { RequestConfig } from './types';

const DATA_METHODS: Method[] = ['POST', 'PUT', 'PATCH'];

export const httpWrapper = async <T>(
  requestConfig: RequestConfig
): Promise<AxiosResponse<T | null>> => {
  const { url, params, data, method } = requestConfig;

  const contentType: AxiosRequestHeaders =
    method === 'POST'
      ? {
          'Content-Type': 'application/json',
        }
      : {};

  const headers = {
    ...contentType,
  };

  const config: AxiosRequestConfig = {
    headers,
    params: params ?? {},
  };

  const requestArgs = [config];

  if (DATA_METHODS.includes(method)) requestArgs.splice(0, 0, data);

  const response = await axios[getAxiosMethod(method)]<T>(url, ...requestArgs);

  return response;
};

function getAxiosMethod(restMethod: Method) {
  if (restMethod === 'POST') return 'post';
  if (restMethod === 'PUT') return 'put';
  if (restMethod === 'PATCH') return 'patch';
  if (restMethod === 'DELETE') return 'delete';
  return 'get';
}
