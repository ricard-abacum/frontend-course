export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IProductSlot {
  id: string;
  quantity: number;
  coordinates: [number, number];
  product: IProduct;
}

export interface IUser {
  balance: number;
  user: IUserInfo;
}

export interface IUserInfo {
  name: string;
  surname: string;
}
