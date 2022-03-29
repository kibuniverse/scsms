interface IRegist {
  username: string;
  password: string;
  phonenum?: string;
  email?: string;
  gender?: string;
}

interface ISign {
  username: string;
  password: string;
}

interface ISaleCar {
  userId: string;
  brand: string;
  series: string;
  model: string;
  buyTime: string;
  km: number;
  color: string;
  price: number;
}

interface ICar {
  brand?: string;
  series?: string;
  model?: string;
}

interface CarInfo {
  imageUrl: string;
  model: string;
  year: string;
  Kilometer: string;
  price: string;
  id: number;
}
interface OrderList {
  id: number;
  model: string;
  tradinghour: string;
  CarInfo: string;
  price: number;
  brand: string;
  picture: string;
}

export { IRegist, ISign, ISaleCar, ICar, CarInfo, OrderList };
