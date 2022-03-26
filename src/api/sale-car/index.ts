import { ISaleCar, ICar } from '../../typings/index.ts';
import { get, post } from '../index.ts';

export const salecar = (salecarInfo: ISaleCar): Promise<never> => post('/sale/index/', salecarInfo);

export const getCarBrand = (carInfo: ICar): Promise<never> => get('/buy/brands/', carInfo);

export const getCarSeries = (brand: string): Promise<never> => get('/buy/series/', { brand });

export const getCarModels = (series: string): Promise<never> => get('/buy/models/', { series });
