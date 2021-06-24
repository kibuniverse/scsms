import { get, post } from '..';

export const getOrder = (param: { userId: number}) => get('/order/getOrder/', param);
