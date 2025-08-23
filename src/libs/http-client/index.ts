import axios from "axios";

// NOTE: ALB 주소가 아닌 CloudFront 주소를 baseURL로 사용
export const httpClient = (() => {
  let _authorization = "";
  const instance = axios.create({
    baseURL: import.meta.env.VITE_CORE_API,
    headers: {
      "x-stellar-climb": import.meta.env.VITE_X_STELLAR_HEADER,
      Authorization: "",
    },
  });

  instance.interceptors.request.use((config) => {
    if (_authorization) {
      config.headers.Authorization = `Bearer ${_authorization}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response.data.data,
    (error) => {
      return Promise.reject(error.response.data);
    }
  );

  return {
    setAuthorization(accessToken: string) {
      _authorization = accessToken;
    },
    async get<T>(
      url: string,
      options?: {
        params?: any;
        paramsSerializer?: (params: Record<string, any>) => any;
      }
    ): Promise<T> {
      return instance.get(url, options);
    },
    async post<T>(url: string, data?: any): Promise<T> {
      return instance.post(url, data);
    },
  };
})();
