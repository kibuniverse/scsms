import axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'http://192.168.1.113:8080';

export const api = axios.create({
  baseURL,
  timeout: 8000,
});

export const post = async (url: string, data: Record<string | number, any>): Promise<any> => {
  const resData: any = await axios.post(`${baseURL}${url}`, data, { headers: { withCredentials: true } });
  if (resData.data.status) {
    ElMessage({
      showClose: true,
      message: resData.data.msg,
      type: 'error',
    });
    return false;
  }
  return resData.data.data || true;
};

export const get = async (url = '', data: Record<string | number, any> = {}): Promise<any> => {
  let realUrl = baseURL + url;
  Object.keys(data).forEach((item, index) => {
    if (index === 0) {
      realUrl += `?${item}=${data[item]}`;
    } else {
      realUrl += `&${item}=${data[item]}`;
    }
  });
  const resData: any = await axios.get(realUrl, { headers: { withCredentials: true } });
  if (resData.data.status) {
    ElMessage({
      showClose: true,
      message: resData.data.msg,
      type: 'error',
    });
    return false;
  }
  return resData.data.data || true;
};
