import { get } from '..';

export const getInfo = (): unknown => get('/buy/index');

export const getCarInfo = (page: unknown): unknown => get('/buy/queryInfo', page);

export const getSingleCarInfo = (id) => get("/buy/car/details", { id });

export const generatorCarOrder = (cid, uid) => get("/order/insert", { cid, uid });
