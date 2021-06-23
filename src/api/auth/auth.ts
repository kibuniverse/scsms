import { IRegist, ISign } from '../../typings';
import { post } from '../index.ts';

export const register = (registInfo: IRegist): any => post('/user/register/', registInfo);

export const sign = (signInfo: ISign): any => post('/user/login/', signInfo);
