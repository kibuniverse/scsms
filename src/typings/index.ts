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

export {
  IRegist,
  ISign,
};
