import { get, post } from '../index.ts';

export const getInfo = (): Promise<never> => get('/buy/index');

export const getCarInfo = (page: Record<string, unknown>): Promise<never> => get('/buy/queryInfo', page);

export const getSingleCarInfo = (id: number): Promise<never> => get('/buy/car/details', { id });

export const generatorCarOrder = (data: any): Promise<unknown> => post('/order/insert', data);
