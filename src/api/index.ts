// import { AxiosRequestConfig } from "axios";
// import { ElMessage } from 'element-plus';
import axios from 'axios';

// interface IResponse {
//   code: number;
//   msg: string;
// }

const baseURL = 'http://192.168.1.113:8080';

const api = axios.create({
  baseURL,
  timeout: 8000,
});

// // 请求拦截
// api.interceptors.request.use((req: AxiosRequestConfig) => {
//   const token: string = localStorage.getItem('token') as string;
//   req.headers['Authorization'] = `Bearer ${token}`
//   return req;
// }, err => console.log(err))

// 响应拦截
// api.interceptors.response.use((res: AxiosResponse) => {
//   const response: IResponse = res.data;
//   if (response.code !== 0) {
//     ElMessage.warning({
//       message: response.msg,
//       type: 'warning',
//     });
//   }
//   return response;
// // eslint-disable-next-line no-console
// }, (err) => console.log(err));

export default api;
