import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class AxiosClient {
  client: AxiosInstance;

  // FUNCTION 생성자 함수
  constructor(){
      this.client = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          Accept: 'application/json',
          'Accept-Language': "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
          'Accept-Charset': "application/x-www-form-urlencoded; charset=UTF-8",
          'Content-Type': 'application/json',
          'Origin': 'https://developer.riotgames.com',
          'X-Riot-Token': process.env.NEXT_PUBLIC_API_KEY
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
    if (process.env.NEXT_PUBLIC_API_KEY){
      config.headers.common['X-Riot-Token'] = process.env.NEXT_PUBLIC_API_KEY;
      config.headers.common['Origin'] = 'https://developer.riotgames.com';
    }

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
    return new Promise((res, rej) => rej(e));
  }
}

const client = new AxiosClient().client;

export default client;
