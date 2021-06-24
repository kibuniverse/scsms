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

export {
  IRegist,
  ISign,
  ISaleCar,
  ICar,
};
