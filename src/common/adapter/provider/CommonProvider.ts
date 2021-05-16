import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class CommonProvider {
  public async getUrl(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(url, options);
  }
}
export default CommonProvider;
