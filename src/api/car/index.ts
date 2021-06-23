import { get } from '../index.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInfo = (): any => get('/buy/index');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCarInfo = (page: number): any => get('/buy/queryInfo', page);
