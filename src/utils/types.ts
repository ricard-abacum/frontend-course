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
