import { get } from '../index.ts';

export const getInfo = (): unknown => get('/buy/index');

export const getCarInfo = (page: unknown): unknown => get('/buy/queryInfo', page);
