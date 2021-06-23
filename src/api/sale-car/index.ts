import { ISaleCar, ICar } from '../../typings';
import { post } from '../index.ts';

export const salecar = (salecarInfo: ISaleCar): any => post('/share/index/', salecarInfo);

export const car = (carInfo: ICar): any => post('/buy/brands/', carInfo);