import axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'http://192.168.1.113:8080';

export const api = axios.create({
  baseURL,
  timeout: 8000,
});

export const post = async (url: string, data: Record<string | number, any>): Promise<any> => {
  const resData: any = await axios.post(`${baseURL}${url}`, data);
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

export const get = async (url: string, data: Record<string | number, any>): Promise<any> => {
  const resData: any = axios.get(`${baseURL}${url}`, data);
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
