import { ISaleCar, ICar } from '../../typings';
import { get, post } from '../index.ts';

export const salecar = (salecarInfo: ISaleCar): any => post('/share/index/', salecarInfo);

export const getCarSeries = (carInfo: ICar): any => get('/buy/brands/', carInfo);