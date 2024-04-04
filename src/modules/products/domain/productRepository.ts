import { IProduct } from './product';

interface ProductRepository {
  get: (id: number) => Promise<IProduct | void>;
  getAll: () => Promise<IProduct[]>;
  update: (product: IProduct) => Promise<IProduct>;
  remove: (id: number) => Promise<void>;
}

export type { ProductRepository };
