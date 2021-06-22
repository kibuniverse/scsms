import { IRegist, ISign } from '../../typings/index.ts';
import api from '../index.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const regist = (registInfo: IRegist): any => api.post('/user/register', registInfo);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sign = (signInfo: ISign): any => api.post('/user/login', signInfo);
