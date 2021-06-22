import { IRegist, ISign } from '../../typings/index.ts';
import { get, post } from '../index.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = (registInfo: IRegist): any => post('/user/register/', registInfo);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sign = (signInfo: ISign): any => post('/user/login/', signInfo);
