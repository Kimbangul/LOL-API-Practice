import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class AxiosClient {
  client: AxiosInstance;

  // FUNCTION 생성자 함수
  constructor(apiUrl: string | undefined){
      this.client = axios.create({
        baseURL: apiUrl,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      this.client.interceptors.request.use(
        this.requestFullFilled,
        this.requestError
      );

      this.client.interceptors.response.use(
        this.responseFullFilled,
        this.responseError
      );
  }

  // FUNCTION method
  requestFullFilled(config: InternalAxiosRequestConfig) : InternalAxiosRequestConfig{
    // if (process.env.NEXT_PUBLIC_API_KEY){
    //   config.headers.common['X-Riot-Token'] = process.env.NEXT_PUBLIC_API_KEY;
    //   config.headers.common['Origin'] = 'https://developer.riotgames.com';
    // }

    // const access = localStorage.getItem('access');

    // if (access){
    //  config.headers.set('Authorization', `Bearer ${access}`);
    //}

    return config;
  }

  requestError(){
    return Promise.reject();
  }

  responseFullFilled(response:AxiosResponse){
    return response;
  }

  responseError(e: AxiosError){
    return e.response;
    // return new Promise((res, rej) => rej(e));
  }
}

const client = new AxiosClient(process.env.NEXT_PUBLIC_BACK_URL).client;
export const krApiClient = new AxiosClient(process.env.NEXT_PUBLIC_KR_API_URL).client;
export const asiaApiClient = new AxiosClient(process.env.NEXT_PUBLIC_ASIA_API_URL).client;

export default client;
