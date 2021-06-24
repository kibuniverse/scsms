import { ISaleCar, ICar } from '../../typings';
import { get, post } from '..';

export const salecar = (salecarInfo: ISaleCar): any => post('/sale/index/', salecarInfo);

export const getCarBrand = (carInfo: ICar): any => get('/buy/brands/', carInfo);

export const getCarSeries = (brand: string): any => get('/buy/series/', { brand });

export const getCarModels = (series: string): any => get('/buy/models/', { series });
