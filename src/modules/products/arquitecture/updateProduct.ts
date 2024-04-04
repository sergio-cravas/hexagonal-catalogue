import { IProduct } from '../domain/product';
import { ProductRepository } from '../domain/productRepository';

export const updateProduct = (repository: ProductRepository) => async (product: IProduct) => {
  return repository.update(product);
};
